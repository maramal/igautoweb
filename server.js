const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(logger(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(process.env.PORT || 10000, () => { console.log('Servidor iniciado correctamente'); } );