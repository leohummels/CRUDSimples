const Repository = require('../repository');
const repo  = new Repository;

module.exports = {
    
    get(req, res) {
        let getUserID = req.body.id
        const result = repo.select(getUserID)
        
        if(result !== undefined){
            res.send(result)
        } else {
            res.send('Nenhum usuário encontrado :(')
        }
        
    },


   post(req, res) {
        const user = req.body;
        repo.insert(user);
       
        /*let num = repo.data.length -1;
        console.log(repo.data[num]);*/
        
        console.log('post feito com sucesso :)')

        res.send(req.body);
    }
}