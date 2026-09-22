const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = require('./app/config/db.js');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./app/routes/authRoutes'));
app.use('/api/customers', require('./app/routes/customerRoutes'));
app.use('/api/cases', require('./app/routes/caseRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`CRM Backend running on port ${PORT}`));