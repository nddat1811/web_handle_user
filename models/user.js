const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { type: String, trim: true },
    email: { type: String, trim: true },
    birthdate: { type: Date, default:'1990-01-01T00:00:00.000+00:00'}
})

module.exports = mongoose.model('Users', UserSchema);