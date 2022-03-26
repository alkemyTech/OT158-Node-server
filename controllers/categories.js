const categoriesService = require('../services/categories');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const result = await categoriesService.getAll(req);
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
    },

    create: async(req,res,next)=>{
        try{
            const result=await categoriesService.create(req.body)
            res.status(201).json({
                meta: {
                    status: 201,
                    url: ''
                },
                data: result
            });
        }
        catch(error){
            return res.status(400).json({
                status: 400,
                message: error
            })
        }
    }
}