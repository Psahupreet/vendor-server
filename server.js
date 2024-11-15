const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const vendorRoutes = require('./routes/vendorRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());  // For parsing JSON bodies
app.use('/api', vendorRoutes);  // Prefix API routes with /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
