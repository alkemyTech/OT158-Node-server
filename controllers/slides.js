const service = require('../services/slides');
const { OK } = require("../utils/status")


    const create = async (req, res, next) => {
        try {
            let data = await service.create(req);
            res.status(OK).json({
                data,
            });
        } catch (error) {
            next(error);
        }
    }

    const removeSlide = async (req,res,next)=>{
      const id = req.params.id
      try {
        const result = await service.remove(id)
        res.status(OK).json({
          msg:"Deleted successful"
        })
      }
      catch (err){
        next(err)
      }
    }
    module.exports = { create, removeSlide}
