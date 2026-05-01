const express = require('express');
const path = require('path');
const app = express();
const { DATA } = require('./data');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal – renderiza index.ejs
app.get('/', (req, res) => {
  res.render('index', { data: DATA });
});

// API opcional (caso queira consultas futuras)
app.get('/api/bestiario', (req, res) => {
  res.json(DATA.bestiario);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌌 Kháos-Etéreo rodando em http://localhost:${PORT}`);
});