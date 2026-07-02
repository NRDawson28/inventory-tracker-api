const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
}, {
    timestamps: true
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;