import express from "express";
import signup from "../Controllers/Authentication/signup.js";
import login from "../Controllers/Authentication/login.js";
import addProducts from "../Controllers/Crud/addProducts.js";
import getData from "../Controllers/Crud/getProduct.js";
import getProductById from "../Controllers/Crud/getProductById.js";
import deleteById from "../Controllers/Crud/deleteById.js";
import deleteByName from "../Controllers/Crud/deleteByName.js";
import updatedProduct from "../Controllers/Crud/updateProduct.js";

const router = express.Router();
//signup
router.post("/signup", signup);
//login
router.post("/login", login);
//add data
router.post("/products", addProducts);

//get all data
router.get("/products", getData);

//get data by id
router.get("/products/:id", getProductById);

//delete a data by id
router.delete("/products/:id", deleteById);

//delete by name
router.delete("/products/:name", deleteByName);

//update data
router.put("/products/:id", updatedProduct);

export default router;
