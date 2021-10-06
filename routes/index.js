const router = require('express').Router();
const user = require('../model');

const controller = require('../Controllers');

router.get('/user', controller.get);


/*router.get('/', (req, res) => {
    console.log("get all")
    return res.send(".GET de usuários")
}); */


router.post('/user', controller.post);

router.put('/update' , (req,res) => {
    console.log('update')
    return res.send(".UPDATE")
});

router.delete('/user' , controller.delete);

module.exports = router;