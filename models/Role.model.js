const { Schema, model } = require('mongoose');

const RoleSchema = new Schema({
    level: String,
    description: String,
    methods: [String]
});

const Role = model('Role', RoleSchema);

module.exports = Role;