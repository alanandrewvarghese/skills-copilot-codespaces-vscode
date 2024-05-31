// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Create a comment
app.post('/api/comments', (req, res) => {
  const newComment = req.body;
  const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json')));
  comments.push(newComment);
  fs.writeFileSync(path.join(__dirname, 'comments.json'), JSON.stringify(comments, null, 2));
  res.json(newComment);
});

// Get all comments
app.get('/api/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json')));
  res.json(comments);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 
 The code above is a simple web server that creates and returns comments. The code uses the Express.js framework to create the server, and the code is divided into two main parts: 
 Create a comment:  When the server receives a POST request, it reads the comments from the JSON file, adds the new comment, and writes the updated comments back to the file. Get all comments:  When the server receives a GET request, it reads the comments from the JSON file and returns them as a response. 
 The server listens on port 5000, and you can start the server by running the following command in the terminal: 
 node comments.js 
 The server is now running, and you can use tools like Postman to send requests to the server. 
 Create a Comment 
 To create a comment, you can send a POST request to the server with the comment data in the request body. You can use the following code to send a POST request using the Fetch API: 
 // Path: create-comment.js
const newComment = {
  id: 1,