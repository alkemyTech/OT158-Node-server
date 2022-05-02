const categoriesService = require('../services/categories');
<<<<<<< HEAD
const { NoContent, OK, Created } = require('../utils/status');

const getAll = async (req, res, next) => {
  try {
    const result = await categoriesService.getAll();

    res.status(OK).json({
      meta: {
        status: OK,
        total: result.length,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const category = await categoriesService.getById(req);

    res.status(OK).json({
      data: category
    });
  }
  catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await categoriesService.create(req.body);

    res.status(Created).json({
      meta: {
        status: Created,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const result = await categoriesService.update(id, body, res);

    res.status(Created).json({
      meta: {
        status: Created,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    await categoriesService.removeCategory(id);

    res.status(NoContent).json({
      data: null
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, create, update, remove, getById }
=======

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
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
