<<<<<<< HEAD
const newsRepository = require('../repositories/news');
const { NotFound, BadRequest } = require('../utils/status');
const { validationResult } = require('express-validator');
const { throwError } = require('../utils/errorHandler');

const getAll = () => {
  return newsRepository.getAll();
};
const create = ({ body }) => {
  body.type = 'news';
  return newsRepository.create(body);
};

const getById = (id)=>{
  return newsRepository.getById(id);
}

const update = async (req) => {
  try {
    if(!validationResult(req).isEmpty()) return Promise.reject({
      status: BadRequest,
      message: "errores en el formulario"
    })
  
    const {id} = req.params;
    const changes = {...req.body};
    const news = await newsRepository.getById(id);
  
    if(!news) return Promise.reject({
      status: NotFound,
      message: "id non exists",
    })
  
    const isUpdated = await newsRepository.update(id, changes);

    return (isUpdated) 
      ? await newsRepository.getById(id)
      : Promise.reject("Unknow problem");
  } catch(error) {
    Promise.reject(error);
  }
}

const deleteNews = async (id) => {
  try {
    const news = await newsRepository.getById(id);

    if (!news) {
      throwError('News not found', NotFound);
    }

    return await newsRepository.remove({
      where: { id }
    });
  } catch (error) {
    throwError('News not found', NotFound);
  }
};

module.exports = {
  getAll,
  create,
  update,
  getById,
  deleteNews
};
=======
const newsRepository = require('../repositories/news')

const create =async({body})=>{
  body.type="news"
  const result = await newsRepository.create(body)
  return result
}
module.exports={
  create
}
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
