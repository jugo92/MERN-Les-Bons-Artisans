const ProduitModel = require("../models/produitModel");
const ObjectID = require("mongoose").Types.ObjectId;
module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProduitModel.find().select();
    res.status(201).json({ products });
  } catch (err) {
    res.status(200).send({ err });
  }
};

module.exports.createProduct = async (req, res) => {
  const { name, type, price, rating, warranty_years, available } = req.body;
  try {
    const product = await ProduitModel.create({
      name,
      type,
      price,
      rating,
      warranty_years,
      available,
    });
    return res.status(201).json({ product: product._id });
  } catch (err) {
    return res.status(400).send({ err });
  }
};

module.exports.productInformation = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send(`Mauvais ID: ${req.params.id}`);
  ProduitModel.findById(req.params.id, (err, data) => {
    if (!err) res.send(data);
    else res.send(`Problème : ${err}`);
  });
};

module.exports.updateProduct = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send(`Mauvais ID: ${req.params.id}`);
  try {
    ProduitModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          type: req.body.type,
          price: req.body.price,
          rating: req.body.rating,
          warranty_years: req.body.warranty_years,
          available: req.body.available,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, data) => {
        if (!err) return res.send(data);
        else return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

module.exports.deleteProduct = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send(`Mauvais ID: ${req.params.id}`);
  try {
    ProduitModel.remove({ _id: req.params.id }).exec();
    res
      .status(200)
      .json({ message: `Produit avec l'id ${req.params.id} supprimer.` });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
