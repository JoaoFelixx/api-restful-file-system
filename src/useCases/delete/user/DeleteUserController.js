const { deleteUser } = require('./DeleteUser')

exports.deleteUserController = async (request, response) => {
  try {
    await deleteUser(request.params.user_id);
    
    return response.sendStatus(202)
  
  } catch(error) {
    response.status(404).json({ result: "User not a found" })
  }
}