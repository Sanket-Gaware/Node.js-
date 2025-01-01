import express from "express";
import Product from "./src/Models/product.model.js";
import ConnectToDb from "./src/Connection/ConnectToDb.js";
import getData from "./src/Methods/Crud/getProduct.js";
import addProducts from "./src/Methods/Crud/addProducts.js";
import getProductById from "./src/Methods/Crud/getProductById.js";
import deleteById from "./src/Methods/Crud/deleteById.js";
import deleteByName from "./src/Methods/Crud/deleteByName.js";
import updatedProduct from "./src/Methods/Crud/updateProduct.js";
import login from "./src/Methods/Authentication/login.js";
import cors from "cors";
import signup from "./src/Methods/Authentication/signup.js";

const app = express();
app.use(express.json());
app.use(cors());

//add data
app.post("/api/products", addProducts);

//get all data
app.get("/api/products", getData);

//get data by id
app.get("/api/products/:id", getProductById);

//delete a data by id
app.delete("/api/products/:id", deleteById);

//delete by name
app.delete("/api/products/:name", deleteByName);

//update data
app.put("/api/products/:id", updatedProduct);

// app.get("/hello", (req, res) => {
//   res.send("Hello from the server");
// });

//register signup
app.post("/api/signup", signup);
//login
app.post("/api/login", login);

app.listen(8081, () => {
  ConnectToDb();
  console.log("Server is running on port 8081");
});
