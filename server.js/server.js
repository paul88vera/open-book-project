require('dotenv').config();
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const PORT = 3000;
app.use(express.json());

const users = [
  {
    username: 'jobs@inleague.com',
    password: 'openBook99'
  }
]

app.get('/authenticate', authenticateToken,  (req,res) => {
  res.json(users.filter(user) => user.username == req.user.name);
});

app.post('/authenticate', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { username: username, password: password };
  
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.json({ accessToken: accessToken });

})

function authenticateToken(req,res,next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
    if(err) return res.sendStatus(403);
    next();
  })
}

app.listen(4000, () => {
  console.log(`Running on port ${PORT}`)
})