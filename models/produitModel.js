const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 60,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      minimum: 1,
    },
    rating: {
      type: Number,
      required: true,
      minimum: 0,
      maximum: 5,
    },
    warranty_years: {
      type: Number,
      required: true,
      minimum: 1,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProduitModel = mongoose.model("produit", produitSchema);
module.exports = ProduitModel;
