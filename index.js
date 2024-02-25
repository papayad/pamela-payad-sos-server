require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user-routes");
const listingsRoutes = require("./routes/listings-routes");

app.use("/users", userRoutes);
app.use("/listings", listingsRoutes);

app.listen(PORT, () => {
  console.log(`👼 Server started on http://localhost:${PORT}`);
});
