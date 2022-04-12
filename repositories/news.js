const {News} = require('../models')

const create= async(body)=>{
  const result = News.create(body);
  return result
}

const remove = async id => {
  return await News.destroy({ where: { id }});
};

module.exports={
  create,
  remove
}