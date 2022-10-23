const { Router } = require('express');
const router = Router();
const authControllers = require('../controllers/authControllers');

router.post('/login', authControllers.login);

module.exports = router;
