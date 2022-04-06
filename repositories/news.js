const {News} = require('../models')

const create= async(body)=>{
  const result = News.create(body);
  return result
}

const remove = async id => {
  const result = await News.destroy({ where: { id }});
  return result
};

module.exports={
  create,
  remove
}