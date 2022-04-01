const {News} = require('../models')

const create= async(body)=>{
  const result = News.create(body);
  return result
}

module.exports={
  create
}