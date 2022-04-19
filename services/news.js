const newsRepository = require('../repositories/news');
const { NotFound, BadRequest } = require('../utils/status');

const getAll = () => {
  return newsRepository.getAll();
};
const create = ({ body }) => {
  body.type = 'news';
  return newsRepository.create(body);
};

const update = async (req) => {

  const {id} = req.params;
  const changes = {...req.body};
  let news = await newsRepository.getById(id);

  if(!news) return Promise.reject({
    status: NotFound,
    message: "id non exists",
  })

  const isUpdated = await newsRepository.update(id, changes);
  return isUpdated? await newsRepository.getById(id) : Promise.reject("Unknow problem");
}

module.exports = {
  getAll,
  create,
  update,
};
