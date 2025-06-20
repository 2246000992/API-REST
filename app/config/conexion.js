const mongoose = require('mongoose');
const config = require('./config');

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(config.db.host)
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