const categoriesRepository = require('../repositories/categories');


const getAll = async () => {

    const result = await categoriesRepository.getAll();
    return result;
}


const create = async (req) => {

    const result = await categoriesRepository.create(req)
        .then(categories => {
            return categories
        })
    return result;
}


const update = async (id, data)=>{
  const categories = await categoriesRepository.getById(id)
  if(categories){
    await categoriesRepository.update(id,data)
    const result= await categoriesRepository.getById(id)
    return result
  }
  else{
    return error
  }
}
module.exports = { getAll, create, update }
