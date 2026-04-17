const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let movies = [];

app.post('/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title,
        ratings: []
    };
    movies.push(movie);
    res.json(movie);
});

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.post('/movies/:id/rate', (req, res) => {
    const movie = movies.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).send('Filme não encontrado');

    movie.ratings.push(req.body.rating);
    res.json(movie);
});

app.get('/movies/:id/average', (req, res) => {
    const movie = movies.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).send('Filme não encontrado');

    const avg = movie.ratings.length
        ? movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length
        : 0;

    res.json({ average: avg });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});