const {
  searchProduct,
  getProduct,
  getAllProducts,
  insertProduct,
  updateProduct,
  deleteProduct,
} = require("../modules/products.js");

const _getAllProducts = (req, res) => {
  getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ img: "not found" });
    });
};

const _getProduct = (req, res) => {
  getProduct(req.params.id)
    .then((data) => {
      if (data.length === 0) {
        return res
          .status(404)
          .json({ msg: "not found product" });
      }
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _searchProduct = (req, res) => {
  searchProduct(req.query.q)
    .then((data) => {
      if (data.length === 0) {
        return res
          .status(404)
          .json({ msg: "not found product" });
      }
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _insertProduct = (req, res) => {
  insertProduct(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ img: "not found" });
    });
};

const _updateProduct = (req, res) => {
  updateProduct(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ img: "not found" });
    });
};

const _deleteProduct = (req, res) => {
  deleteProduct(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ img: "not found" });
    });
};

module.exports = {
  _getAllProducts,
  _getProduct,
  _searchProduct,
  _insertProduct,
  _updateProduct,
  _deleteProduct,
};
