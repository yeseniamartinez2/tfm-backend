const { petDb } = require("../db");

/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint as part of creating the blogpost, add them to this service
 */
const createPet = async (name, species, gender) => {
    try {
        return await petDb.insertPet(name, species, gender);
    } catch (e) {
        throw new Error(e.message);
    }
};

const getPets = async () => {
    try {
        const pets = await petDb.getPets();
        console.log("🚀 ~ file: pet.service.js ~ line 18 ~ getPets ~ pets", pets);
        return pets;
    } catch (e) {
        throw new Error(e.message);
    }
};

const getPetById = async (id) => {
    try {
        const pet = await petDb.getPetById(id);
        console.log("🚀 ~ file: pet.service.js ~ line 18 ~ getPets ~ pet", pet);
        return pet;
    } catch (e) {
        throw new Error(e.message);
    }
};

const deletePetById = async (id) => {
    try {
        return await petDb.deletePetById(id);
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = {
    createPet,
    getPets,
    getPetById,
    deletePetById,
};
