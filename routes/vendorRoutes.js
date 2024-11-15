const express = require('express');
const Vendor = require('../models/Vendor');
const router = express.Router();

// Route to create a new vendor
router.post('/vendors', async (req, res) => {
    try {
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json(vendor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all vendors
router.get('/vendors', async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
