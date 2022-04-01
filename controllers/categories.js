const categoriesService = require('../services/categories');

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
        return res.status(400).json({
            status: 400,
            message: error
        })
    }
}


const create = async (req, res, next) => {
    try {
        const result = await categoriesService.create(req.body)
        res.status(201).json({
            meta: {
                status: 201,
                url: ''
            },
            data: result
        });
    }
    catch (error) {
        return res.status(400).json({
            status: 400,
            message: error
        })
    }
}

const update = async(req,res,next)=>{
  try{
    const id = req.params.id
    const body = req.body
      const result= await categoriesService.update(id, body, res)
      res.status(201).json({
        meta: {
            status: 201,
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
