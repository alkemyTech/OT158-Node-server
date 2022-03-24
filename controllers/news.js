const getAll = async (req, res, next) => {
  try {
    const result = await newsService.getAll(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const result = await newsService.create(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const result = await newsService.update(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const remove = async (req, res, next) => {
  try {
    const result = await newsService.remove(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
