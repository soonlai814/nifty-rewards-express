const mongoose = require("mongoose");

const merchantsSchema = new mongoose.Schema({
  merchant_address: { type: String, required: true },
  name: { type: String, required: true, default: "Merchant" },
  description: { type: String },
  verified: { type: Boolean, default: true },
});

module.exports = mongoose.model("Merchant", merchantsSchema);
