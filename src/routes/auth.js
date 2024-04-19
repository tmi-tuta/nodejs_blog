const express = require("express");
const router = express.Router();
const authController = require('../app/controllers/AuthController');

router.use('/', authController.register);

module.exports = router;