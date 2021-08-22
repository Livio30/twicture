const express = require("express");
const cors= require ("cors");
const path =  require("path");
const dotenv = require("dotenv");
const routes =require("./routes/tweets");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist","index.html"));
  });
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
