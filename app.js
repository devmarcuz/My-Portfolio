const express = require("express");
const cors = require("cors");

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
app.use(express.static("/client/build"))

app.post("/request", async (req, res) => {
  try {
    const user = req.body;
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: "Server error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
