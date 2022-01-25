const { getUserController }    = require('./get');
const { createUserController } = require('./create');
const { deleteUserController } = require('./delete');
const { updateUserController } = require('./update');

module.exports = {
  getUserController,
  createUserController,
  deleteUserController,
  updateUserController,
}