const Case = require('../models/Case');

const getCases = async (req, res) => {
  try {
    const cases = await Case.find().populate('customer_id', 'name contact_info').populate('assigned_to', 'username role');
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cases' });
  }
};

const createCase = async (req, res) => {
  const { customer_id, title, priority, status, assigned_to } = req.body;
  try {
    if (!customer_id || !title) {
      return res.status(400).json({ message: 'Customer ID and title are required' });
    }

    const newCase = await Case.create({
      customer_id,
      title,
      priority,
      status,
      assigned_to: assigned_to || req.user.id,
    });

    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create case' });
  }
};

const updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCase) return res.status(404).json({ message: 'Case not found' });
    res.json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update case' });
  }
};

module.exports = { getCases, createCase, updateCase };