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
    const { id } = req.params;
    const body = req.body;
    const resultService = await updateService(id, body);

    const RESULTS = {
      '-1': () => {
        res.status(404).json({
          msg: 'No member register'
        })
      },
      0: () => {
        res.status(400).json({
          msg: 'Member not update'
        })
      },
      1: () => {
        return res.status(200).json({
          msg: 'Successful member update',
          data: resultService.data
        })
      }
    };

    const result = RESULTS[resultService.state]
      ? RESULTS[resultService.state]()
      : res.status(500).json({ msg: 'Error' })

    return result
  } catch (err) {
    next(err);
  }
};

module.exports = { create, update };
