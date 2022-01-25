const userRepository = require('../../../repositories/UserRepository');

exports.getUser = async (id) => {
  try {
    const users =  await userRepository.find(id)
    
    return users;

  } catch (error) {
    throw new Error(error)
  }
}