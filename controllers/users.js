const usersService = require('../services/users');
const { OK, Created, NoContent, Accepted } = require('../utils/status');

const getAll = async (req, res, next) => {
  try {
    const usersList = await usersService.getAll();

    res.status(OK).json({
      data: usersList
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await usersService.create(req);

    res.status(Created).json({
      message: 'User created',
      data: result.data,
      token: result.token
    });
  } catch (error) {
      next(error);
  }
}

const removeUser = async (req,res,next)=>{
  try {
    const { id } = req.params;

    await usersService.remove(id);

    res.status(NoContent).json({
      message:"Deleted successful",
      data: null
    })
  }
  catch (err){
    next(err)
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const result = await usersService.update(id, body, res);

    res.status(OK).json({
      message: "User updated",
      data: result
    });
  } catch (err) {
    next(err);
  }
}

const getAuthenticatedUserData = async (req, res, next) => {

  try {
    const user = await usersService.getAuthenticatedUserData(req);
    res.status(OK).json(user);
  } catch (error) {
    next(error);
  }
}

const login = async (req, res, next) => {
  try {
    const { email } = req.body;

    const result = await usersService.getUserByEmail(email);

    res.status(Accepted).json({
      message: "User authenticated",
      data: result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  create,
  removeUser,
  update,
  getAuthenticatedUserData,
  login,
};