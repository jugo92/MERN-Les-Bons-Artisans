const router = require("express").Router();

const productController = require("../controller/productController");

router.get("/", productController.getAllProducts);
router.post("/create", productController.createProduct);
router.get("/:id", productController.productInformation);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
