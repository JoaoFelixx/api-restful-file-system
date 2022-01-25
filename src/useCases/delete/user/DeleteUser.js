const userRepository = require('../../../repositories/UserRepository');

exports.deleteUser = async (id) => {
  try {
    return await userRepository.exclude(id) 
  
  } catch (error) {
    throw new Error(error)
  }  
}