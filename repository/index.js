class Repository {
    constructor(){
       this.data = [];
   }

    insert(user){
        this.data.push(user);
    }

    select(id) {
        return this.data.find(user => user.id === id)
    }


};

module.exports = Repository;