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
    origin: "https://resumedemoapp.herokuapp.com",
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
    return res.status(200).json({ user, success: "Email has been sent" });
  } catch (err) {
    res.status(400).json({ error: "Server error" });
  }
});

app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
