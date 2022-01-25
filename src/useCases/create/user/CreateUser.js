const userRepository = require('../../../repositories/UserRepository');
const {
  createHash,
  createUuid,
} = require('../../../services');

exports.createUser = async (email, password) => {
  const uuid = createUuid();
  const newPassword = await createHash(password);

  const user = {
    _id: uuid,
    email: email.toLowerCase(),
    password: newPassword 
  }

  return await userRepository.save(user);
}