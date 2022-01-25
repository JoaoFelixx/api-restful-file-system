const { updateUser } = require('./UpdateUser');

const isInvalidUser = ({ email, password }) => {
  
  const REGEX_EMAIL = /\S+@\S+\.\S+/;
  const error = [];

  if (!email || !password) return false;

  if (password.length < 4) error.push('Password is very small');

  if (!REGEX_EMAIL.test(email)) error.push('email is not valid');

  return error.length > 0 ? error : true;
}

exports.updateUserController = async (request, response) => {
  if (!request.body.email ||
      !request.body.password ||
      !request.params.user_id) return response.sendStatus(400);

  try {
    
    const { 
      body: {
        email,
        password
      },
      params: {
        user_id
      } 
    } = request;

    const thereErrors = isInvalidUser(email, password)
  
    if (thereErrors) return response.status(400).json({ messages: thereErrors }) 

    await updateUser(user_id, email, password)

    return response.sendStatus(202)
  
  } catch (errors) {
    return response.status(404).json({ result: "User not a found" })
  }
}