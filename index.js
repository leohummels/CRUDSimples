const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (_req, res) => {
    res.send('Sua primeira API do zero, sozinho')
})

app.use('/crud', router);

const server = app.listen(3000, ()=>{
    console.log('servidor rodando')
});

module.exports = server;