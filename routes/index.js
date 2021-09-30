const router = require('express').Router();
const user = require('../model');

const controller = require('../Controllers');

router.get('/users', controller.get);


router.get('/', (req, res) => {
    console.log("get all")
    return res.send(".GET de usuários")
});


router.post('/', controller.post);

router.put('/update' , (req,res) => {
    console.log('update')
    return res.send(".UPDATE")
})

router.delete('/' , (req,res) => {
    console.log('delete')
    return res.send(".DELETE")
})

module.exports = router;