const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({});

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    //   location of the react app connecting to
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.static("client/build"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

app.post("/request", async (req, res) => {
  try {
    const user = req.body;
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: "Server error" });
  }
});

app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
