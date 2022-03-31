const { createService, updateService } = require('../services/members');

const create = async (req, res, next) => {
    try {
        
    }
    catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const resultService = await updateService(idMember = req.params, dataUpdate = req.body);

        const RESULTS = {
            0: () => {
                res.status(404).json({
                    msg: 'No member register'
                })
            },
            1: () => {
                return res.status(200).json({
                    msg: 'Succes member updated'
                })
            }
        };

        const result = RESULTS[resultService]
            ? RESULTS[resultService]()
            : res.status(500).json({ msg: 'Error' })

        return result
    } catch (err) {
        next(err);
    }
};

module.exports = { create, update };