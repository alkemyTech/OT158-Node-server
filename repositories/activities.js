const {Activities} = require('../models')

/*const getAllActivities = async () => {
    const result = [];
    return result;
}

module.exports = { getAll };*/

const create= async(body)=>{
    const result = Activities.create(body);
    return result
} 

module.exports={
    create
} 
