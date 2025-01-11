const express = require('express');
const movieRouter = express.Router();

let movies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010, rating: 8.8 },
  { id: 2, title: 'The Dark Knight', genre: 'Action', releaseYear: 2008, rating: 9.0 },
  { id: 3, title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994, rating: 8.8 },
];

movieRouter.get('/', (req, res) => {
  res.json(movies);
});

movieRouter.get('/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(404).send('Movie not found');
  }
  res.json(movie);
});

movieRouter.post('/', (req, res) => {
  const { title, genre, releaseYear, rating } = req.body;
  const newMovie = {
    id: movies.length + 1,
    title,
    genre,
    releaseYear,
    rating,
  };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

movieRouter.patch('/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(404).send('Movie not found');
  }
  movie.rating = req.body.rating;
  res.json(movie);
});

movieRouter.delete('/:id', (req, res) => {
  const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
  if (movieIndex === -1) {
    return res.status(404).send('Movie not found');
  }
  const deletedMovie = movies.splice(movieIndex, 1);
  res.json(deletedMovie);
});

module.exports = movieRouter;