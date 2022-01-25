const userRepository = require('../../../repositories/UserRepository');

async function getUser(id) {
  try {
    const users =  await userRepository.find(id)
    
    return users;

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getUser;