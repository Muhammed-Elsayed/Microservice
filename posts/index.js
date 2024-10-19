const express = require("express");
const body_parser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");


app = express();
app.use(body_parser.json());

const posts = {};
// GET
app.get("/posts", (req, res)=>{
  res.status(200).json(posts)
})

// Post
app.post("/posts", (req, res)=>{
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  
  posts[id] = {id, title};

  res.status(200).json(posts[id]);
})

app.listen(4000, ()=>{
  console.log("listening on port 4000");
})