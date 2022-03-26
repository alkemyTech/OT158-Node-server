const {Activities} = require('../models')

/*const getAllActivities = async () => {
    const result = [];
    return result;
}

module.exports = { getAll };*/

class ActivitiesRepository {


    async findAllActivities(){
        return await Activities.find();
    }

    async findByIdActivities(id) {
        return await Activities.findById(id);
    }
    
    async updateActivities(id, activities){
        return await Activities.findByIdAndUpdate(id, activities, {new : true});
    }

    async removeActivities(id) {
        return await Activities.findByIdAndRemove(id);
    }
}

module.exports = ActivitiesRepository; 