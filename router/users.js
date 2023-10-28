const router = require('express').Router();

// USERS
// CONTROLLER
const usersControllers = require('../controllers/users');

// MIDDLEWARE
const usersMiddlewares = require('../middlewares/users');

router.get("/", usersMiddlewares.usersAuth, usersControllers.usersGetAll);
router.get('/:id', usersControllers.usersGetOne);

module.exports = router;