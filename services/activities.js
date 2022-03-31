const activitiesRepository = require('../repositories/activities');

const create =async({body})=>{
    //namevalidation="activities"
    //contentvalidation="activities"

    const result = await activitiesRepository.create(body)
    return result
}

module.exports={
    create
} 


//name: DataTypes.STRING,
  //  content: DataTypes
