const categoriesRepository = require('../repositories/categories');

const getAll = async () => {
  const allCategories = await categoriesRepository.getAll();
  const result = allCategories.map((categorie) => {
    return categorie.name;
  });
  return result;
};

const create = async (req) => {

    const result = await categoriesRepository.create(req)
    return result;
}


const update = async (id, data)=>{
  const categories = await categoriesRepository.getById(id)
  if(categories){
    const updatedCategorie =await categoriesRepository.update(id,data)
    if(updatedCategorie===1){
      const result= await categoriesRepository.getById(id)
      return result
    }
    else{
      return error
    }
  }
  else{
    return error
  }
}
module.exports = { getAll, create, update }
