const mongoose = require('mongoose');
const connectMongo = require("./connect_mongo");
const schema = require('./db_schema'); 
var AutoIncrement = require('mongoose-sequence')(mongoose);

connectMongo();


schema.plugin(AutoIncrement, { id: 'order_seq', inc_field: '_id' });

const createPerson = async (name, surname, group, variant, score) => {
    const model = new mongoose.model('students', schema);

    let student = new model({
        name: name,
        surname: surname,
        group: group,
        variant: variant,
        score: score,
    });
    return (await student.save())._id;
}

const getPersons = () => { 
    const model = new mongoose.model('students', schema);
    return model.find({});
};

const getPersonById = (id) => {
    const model = new mongoose.model('students', schema);
    return model.findById(id);
}

const updatePersonScoreById = (id, score) => {
    const model = new mongoose.model('students', schema);
    return model.findByIdAndUpdate(id, { score: score });
}

module.exports = {
    createPerson,
    getPersons,
    getPersonById,
    updatePersonScoreById,
}