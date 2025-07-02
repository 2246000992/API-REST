const mongoose = require('mongoose');
const config = require('./config').db;

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(config)
            .then(conn => {
                this.connection = conn;
                console.log('jala')
            })
            .catch(err => {
                console.error('no jala', err);
            }
        );
    },
}