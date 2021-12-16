const express = require('express');
const roleController = require('../controllers/Role');
const roleRouter = express.Router();

roleRouter.route('/')
    .get(roleController.getAllRoles)
    .post(roleController.createRole);

roleRouter.route('/:id')
    .get(roleController.getRole)
    .delete(roleController.deleteRole)
    .patch(roleController.updateRole);

module.exports = roleRouter; 