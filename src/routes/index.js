const { Router } = require('express');

const router = Router();

const { 
  getUserController,
  createUserController,
  updateUserController,
  deleteUserController 
} = require('../useCases');

router.get('/:user_id?', getUserController);

router.post('/', createUserController);

router.put('/:user_id', updateUserController);  

router.delete('/:user_id?', deleteUserController);

module.exports = router;