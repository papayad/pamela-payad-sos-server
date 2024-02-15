require("dotenv").config();
const express = require("express");
const app = express();
// const cors = require("cors");

const PORT = process.env.PORT || 8081;

const userRoutes = require("./routes/user-routes");
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`👼 Server started on http://localhost:${PORT}`);
});
