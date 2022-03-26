const activitiesRepository = require('../repositories/activities');

const findById = async(id) => {
    return await repository.findById(id);
}



const findAll = async(filter, options) => {
    return await repository.findAllWithPagination(filter, options);
}


const save = async(activities) => {
    return await repository.save(activities);
}


const update = async(id, activities) => {
    return await repository.update(id, activities);
}

const remove = async(id) => {
    return await repository.remove(id);
}

module.exports = {
    findById,
    findAll,
    save,
    update,
    remove
}

const getAll = async (req)  => {
    const result = await activitiesRepository.getAll();
    return result;
}

module.exports = { getAll };