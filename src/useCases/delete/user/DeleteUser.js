const userRepository = require('../../../repositories/UserRepository');

async function deleteUser(id) {
  return await userRepository.exclude(id)
}

module.exports = deleteUser