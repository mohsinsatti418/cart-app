const express = require("express");
const cors = require("cors");

const cartRoutes = require("./Routes/cartRoutes");
const errorHandler = require("./MiddleWare/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", cartRoutes);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});