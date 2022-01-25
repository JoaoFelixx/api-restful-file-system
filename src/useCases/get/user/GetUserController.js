const { getUser } = require('./GetUser')

exports.getUserController = async (request, response) => {
  try {
    const users = await getUser(request.params.user_id)

    if (!users) return response.sendStatus(204);

    return response.status(200).json(users)

  } catch (error) {
    return response.status(500).json({ result: "Error connection" }) 
  }
}