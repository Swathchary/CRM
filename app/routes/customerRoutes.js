const express = require('express');

const {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customerController');

const { protect } = require('../middleware/authMiddleware');

const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();


// Admin and Agent can view customers
router
  .route('/')
  .get(
    protect,
    authorizeRoles('admin', 'agent'),
    getCustomers
  )

  .post(
    protect,
    authorizeRoles('admin', 'agent'),
    createCustomer
  );


// Admin and Agent can update customers
router
  .route('/:id')
  .put(
    protect,
    authorizeRoles('admin', 'agent'),
    updateCustomer
  )

  // Only Admin can delete customers
  .delete(
    protect,
    authorizeRoles('admin'),
    deleteCustomer
  );


module.exports = router;