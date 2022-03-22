const dbo = require("../config/conn");
var ObjectId = require("mongodb").ObjectId;
const insertPet = async (name, species, gender) => {
    const pet = {
        name: name,
        species: species,
        gender: gender,
        last_modified: new Date(),
    };
    const dbConnect = dbo.getDb();
    dbConnect.collection("pets").insertOne(pet, function (err, result) {
        if (err) {
            console.log("Error inserting pet!");
        } else {
            console.log(`Added a new pet with id ${result.insertedId}`);
        }
    });
};

const getPets = async () => {
    const dbConnect = dbo.getDb();
    return await dbConnect
        .collection("pets")
        .find({})
        .toArray()
        .then((results) => {
            return results;
        });
};

const getPetById = async (id) => {
    const dbConnect = dbo.getDb();
    var o_id = new ObjectId(id);
    return await dbConnect
        .collection("pets")
        .find({ _id: o_id })
        .toArray()
        .then((results) => {
            return results;
        });
};

const deletePetById = async (id) => {
    const dbConnect = dbo.getDb();
    var o_id = new ObjectId(id);
    dbConnect.collection("pets").deleteOne({ _id: o_id }, function (err, result) {
        if (err) {
            console.log("Error inserting pet!");
        } else {
            console.log(`Added a new pet with id ${result.insertedId}`);
        }
    });
};

module.exports = {
    insertPet,
    getPets,
    getPetById,
    deletePetById,
};
