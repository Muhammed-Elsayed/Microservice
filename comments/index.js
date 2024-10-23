const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

app = express();
app.use(bodyParser.json())
app.use(cors());

// function to say hello
const commentByPostId = {"1": [{id: "1", content: "Hello"}]};

app.get("/posts/:id/comments", (req, res)=>{
  res.json(commentByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res)=>{
  const commentId = randomBytes(4).toString("hex");
  const content = req.body.content;
  console.log(content)
  // array of comments in each post
  let comments = commentByPostId[req.params.id] || [];
  comments.push({id: commentId, content});
  //commentByPostId[req.params.id] = comments;
  comments = commentByPostId[req.params.id];
  res.status(201).json(comments);


});

app.listen(4001, ()=>{
  console.log("listening on port 4001");
})