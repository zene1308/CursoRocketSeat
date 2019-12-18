const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://zene1308:zene1308@projetoaircncprecisa-wsu2q.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

//req.query = acessar query params(para filtros)
//req.params = acessar route params (para edicao, delete)
//req.body = acessar o corpo da requisicao (para criacao, edicao)

app.use(cors());

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);