var Class = require('./model')

class ClassService
{
    create(values) {
        return Class.create(values);
    }

    findAll(query){
        return Class.find(query).exec();
    }
}


module.exports = new ClassService();