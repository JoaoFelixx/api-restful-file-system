const { createUser } = require('./CreateUser')

const isInvalidUser = ({ email, password }) => {
  
  const REGEX_EMAIL = /\S+@\S+\.\S+/;
  const error = [];

  if (!email || !password) return false;

  if (password.length < 4) error.push('Password is very small');

  if (!REGEX_EMAIL.test(email)) error.push('email is not valid');

  return error.length > 0 ? error : false;
}

exports.createUserController = async (request, response) => {
  if (!request.body.email || !request.body.password) return response.sendStatus(400);
  
  try {
    const { email, password } = request.body;

    const thereErrors = isInvalidUser({ email, password })

    if (thereErrors) return response.status(400).json({ message: [thereErrors] })

    await createUser(email, password)

    return response.sendStatus(201)

  } catch (error) {
    response.status(400).json({ results: "Email is already registered" })
  } 
}