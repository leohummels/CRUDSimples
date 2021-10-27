const router = require('express').Router();
const user = require('../model');

const controller = require('../Controllers');

router.get('/user', controller.get);

router.post('/user', controller.post);

router.put('/put' , controller.update);

router.delete('/user' , controller.delete);

module.exports = router;