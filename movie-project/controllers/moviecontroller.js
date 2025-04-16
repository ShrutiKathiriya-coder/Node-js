const Movie = require('../models/movie');

exports.getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.render('index', { movies });
};

exports.addMovieForm = (req, res) => {
  res.render('add');
};

exports.createMovie = async (req, res) => {
  await Movie.create(req.body);
  res.redirect('/');
};

exports.editMovieForm = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('edit', { movie });
};

exports.updateMovie = async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
