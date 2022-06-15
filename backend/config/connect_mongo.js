const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_LINK, { useNewUrlParser: true })
    .then(() => { console.log("Connected to mongo server") })
    .catch(err => { console.log(err) });
}

module.exports = connect;