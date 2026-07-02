const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String        
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true
    }
}, {
    timestamps: true
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;