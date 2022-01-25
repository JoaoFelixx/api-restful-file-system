const userRepository = require('../../../repositories/UserRepository');
const { createHash } = require('../../../services');

async function updateUser({ id, email, password }) {
  try {
    const thereUser = await userRepository.find(id);

    if (!thereUser) throw new Error()

    const newPassword = await createHash(password);

    const user = {
      email: email,
      password: newPassword
    }

    return await userRepository.update(id, user);

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = updateUser;