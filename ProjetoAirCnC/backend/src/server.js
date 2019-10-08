const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const app = express();

const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://zene1308:zene1308@cursorocketseat-xjuuf.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectUsers[user_id] = socket.id;
});

app.use((req, res, next) =>{
    req.io = io;
    req.connectUsers = connectUsers;

    return next();
})


//req.query = Acessar query params no navegador para filtros
//req.params = Acessar route params para edicao e exclusao
//req. body acessar corpo da requisicao para criacao e edicao de registros
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);