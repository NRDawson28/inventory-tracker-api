const Item = require("../models/itemsModel");

const getItems = async (req,res) => {
    try {
        const items = await Item.find().populate("supplier");
        res.json(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createItem = async (req,res) => {
    try {
        const newItem = await Item.create(req.body);
        res.json(newItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getItems, createItem }