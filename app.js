const express = require('express');
const path = require('path');
const movieRouter = require('./routes/movieRouter');
const { myLogger } = require('./middleware/logger');

const app = express();
app.use(myLogger);
app.use(express.json());
app.use('/movies', movieRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});