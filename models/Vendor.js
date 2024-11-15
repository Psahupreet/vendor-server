const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    type: { type: String, required: true, enum: ['Supplier', 'Service Provider', 'Logistics'] },
    criticality: { type: String, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Vendor', VendorSchema);
