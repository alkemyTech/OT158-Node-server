const activitiesService = require('../services/activities')
const create = async (req, res, next) => {
    try {
      const result = await activitiesService.create(req);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    create
};

