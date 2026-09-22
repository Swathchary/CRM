const express = require('express');
const { getCases, createCase, updateCase } = require('../controllers/caseController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getCases).post(protect, createCase);
router.route('/:id').patch(protect, updateCase);

module.exports = router;