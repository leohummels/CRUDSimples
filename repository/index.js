class Repository {
    constructor() {
       this.data = [];
   }

    insert(user) {
        this.data.push(user);
    }

    select(id) {
        return this.data.find(user => user.id === id)
    }

    remove(id) {
       const findId = this.data.findIndex(x => x.id === id)
       return this.data.splice(findId, 1)
    }

};

module.exports = Repository;