const userRepository = require('../../../repositories/UserRepository');
const { randomUUID } = require('crypto');
const { createHash } = require('../../../services');

async function createUser({ email, password }) { 

  const [
    _id,
    passwordHash
  ] = await Promise.all([
    randomUUID(),
    createHash(password)
  ])

  const user = {
    _id,
    email: email.toLowerCase(),
    password: passwordHash
  }

  return await userRepository.save(user);
}

module.exports = createUser;