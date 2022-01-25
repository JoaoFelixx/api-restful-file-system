const { Router } = require('express');

const router = Router();

const { 
  getUserController,
  createUserController,
  updateUserController,
  deleteUserController 
} = require('../useCases');

router.get('/:user_id?', (req, res) => {
  res.sendStatus(200).json({ Welcome: 'Welcome' })
});

router.post('/', createUserController);

router.put('/:user_id', updateUserController);  

router.delete('/:user_id?', deleteUserController);

module.exports = router;