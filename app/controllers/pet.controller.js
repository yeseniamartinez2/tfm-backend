const { petService } = require("../services");

/*
 * call other imported services, or same service but different functions here if you need to
 */
const postPet = async (req, res, next) => {
    const { name, species, gender } = req.body;
    try {
        await petService.createPet(name, species, gender);
        // other service call (or same service, different function can go here)
        // i.e. - await generateBlogpostPreview()
        res.sendStatus(201);
        next();
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
};

const getPets = async (req, res, next) => {
    try {
        const pets = await petService.getPets();
        res.json(pets);
        next();
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
};

const getPetById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const pet = await petService.getPetById(id);
        res.json(pet);
        next();
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
};

const deletePetById = async (req, res, next) => {
    const id = req.params.id;
    try {
        await petService.deletePetById(id);
        res.sendStatus(202);
        next();
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
};

module.exports = {
    postPet,
    getPets,
    getPetById,
    deletePetById,
};