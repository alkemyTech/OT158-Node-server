const categoriesService = require('../services/categories');

const { OK, BadRequest, Created } = require ("../utils/status")

const getAll = async (req, res, next) => {
    try {


        const result = await categoriesService.getAll();

        res.status(200).json({
            meta: {
                status: 200,
                total: result.length,
                url: ''
            },
            data: result
        });
    }
    catch (error) {
        return res.status(BadRequest).json({
            status: BadRequest,
            message: error
        })
    }
}


const create = async (req, res, next) => {
    try {
        const result = await categoriesService.create(req.body)
        res.status(Created).json({
            meta: {
                status: Created,
                url: ''
            },
            data: result
        });
    }
    catch (error) {
        return res.status(BadRequest).json({
            status: BadRequest,

            message: error
        })
    }
}

const update = async(req,res,next)=>{
  try{
    const id = req.params.id
    const body = req.body

      const result = await categoriesService.update(id, body, res)
      res.status(Created).json({
        meta: {
            status: Created,
            url: ''
        },
        data: result
    });
  }
  catch (error){
    res.status(error.status).json({
      status: error.status,
      msg: error.message
    })
  }
}

module.exports = { getAll, create, update }
