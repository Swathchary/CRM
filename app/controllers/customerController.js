const Customer = require('../models/Customer');

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch customers' });
  }
};

const createCustomer = async (req, res) => {
  const { name, contact_info, status } = req.body;
  try {
    if (!name || !contact_info || !contact_info.email) {
      return res.status(400).json({ message: 'Customer name and email are required' });
    }

    const customer = await Customer.create({ name, contact_info, status });
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create customer' });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update customer' });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) return res.status(404).json({ message: 'Customer not found' });
    res.json({ message: 'Customer removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete customer' });
  }
};

module.exports = { getCustomers, createCustomer, updateCustomer, deleteCustomer };