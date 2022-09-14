const db = require("../connections/localhost-pg");

const getAllProducts = () => {
  return db("products")
    .select("id", "name", "price")
    .orderBy("name");
};

const getProduct = (product_id) => {
  return db("products")
    .select("id", "name", "price")
    .where({ id: product_id });
};

const searchProduct = (query) => {
  return db("products")
    .select("id", "name", "price")
    .whereILike("name", `${query}%`);
};

const insertProduct = (new_product) => {
  return db("products")
    .insert(new_product)
    .returning("*");
};

const updateProduct = (id, product) => {
  return db("products")
    .update(product)
    .where({ id: id })
    .returning("*");
};

const deleteProduct = (id) => {
  return db("products")
    .where({ id: id })
    .del()
    .returning("*");
};

module.exports = {
  getAllProducts,
  getProduct,
  searchProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
};
