const service = require('../services/slides');
const { OK } = require('../utils/status');

module.exports = {

    create: async (req, res, next) => {
        try {
            let data = await service.create(req);
            res.status(200).json({
                data,
            });
        } catch (error) {
            next(error);
        }
    },

    getById: async (req, res, next) => {
      let id = req.params.id;
      try{
        let data = await service.getById(id);
        res.status(OK).json({
          data
        });
      }
      catch (error){
        next(error);
      }
    }

};
