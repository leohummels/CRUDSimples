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
    },

    delete(req,res) {
        let getUserID = req.body.id
        const result = repo.remove(getUserID)
        
        if(result !== undefined){
            res.send(result)
        } else {
            res.send('Nenhum usuário encontrado :(')
        }
        console.log('delete')
        return res.send(".DELETE")
    },

    update(req, res){
        let getUserID = req.body.id
        const result = repo.select(getUserID)
        const obj = req.body

        if(!result) {
            res.send("Não foi possível completar a sua requisição")
        } else {
            result.name = obj.name;
            result.age = obj.age;
            result.email = obj.email;

            console.log("Update feito com sucesso")
            res.send(obj)
        }
       

    }
}