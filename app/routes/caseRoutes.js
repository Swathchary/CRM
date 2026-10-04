const express = require('express');

const {
  getCases,
  createCase,
  updateCase
} = require('../controllers/caseController');

const {
  protect
} = require('../middleware/authMiddleware');

const {
  authorizeRoles
} = require('../middleware/roleMiddleware');

const router = express.Router();


// Admin and Agent can view cases
router
  .route('/')
  .get(
    protect,
    authorizeRoles('admin', 'agent'),
    getCases
  )

  // Admin and Agent can create cases
  .post(
    protect,
    authorizeRoles('admin', 'agent'),
    createCase
  );


// Admin and Agent can update cases
router
  .route('/:id')
  .patch(
    protect,
    authorizeRoles('admin', 'agent'),
    updateCase
  );


module.exports = router;