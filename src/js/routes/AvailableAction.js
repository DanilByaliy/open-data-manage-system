const express = require('express');
const availableActionController = require('../controllers/AvailableAction');
const availableActionRouter = express.Router();

availableActionRouter
  .route('/')
  .get(availableActionController.getAllAvailableAction)
  .post(availableActionController.createAvailableAction);

  availableActionRouter
  .route('/:id')
  .get(availableActionController.getAvailableAction)
  .delete(availableActionController.deleteAvailableAction)
  .patch(availableActionController.updateAvailableAction);

module.exports = availableActionRouter;