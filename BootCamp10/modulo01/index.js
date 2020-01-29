const express = require('express');

const server = express();

server.use(express.json());

//query params = ?teste1
//route params = /users/1
//request body = { "name": "Diego", "email": "diego@rocketseat.com.br" }

// server.get('/users/:id', (req,res) => {
//    const { id } = req.params;
//    const { nome } = req.query;
//    return res.json({message: `Ola ${id} nome ${nome}`});
// });

const users = ['Paulo Viado Gay', 'Baude Baitola'];

server.use((req, res, next) => {
   console.time('Request');
   console.log(`Metodo: ${req.method}; URL: ${req.url}`);

   next();

   console.timeEnd('Request');
});

function checkUserExist(req, res, next) {
   const {name} = req.body;
   if (!name) {
      return res.status(400).json({ error: 'User name is required'});
   }
   return next();
}

function checkUserInArray(req, res, next){
   const user = users[req.params.index];
   if(!user){
      return res.status(400).json({ error: 'User does not exists'});
   }

   req.user = user;

   return next();
}

//métodos CRUD

//listar todos usuarios
server.get('/users', (req,res) => {
   return res.json(users);
});

//listar 1 usuario
server.get('/users/:index', checkUserInArray,(req,res) => {
   //const { index } = req.params;
   return res.json(req.user);
});

//criar usuario
server.post('/users', checkUserExist,(req,res) => {
   const {name} = req.body;

   users.push(name);
   return res.json(users);
});

//editar usuario
server.put('/users/:index', checkUserExist, checkUserInArray, (req,res) => {
   const {index} = req.params;
   const {name} = req.body;

   users[index] = name;
   return res.json(users);
});

//excluir usuario
server.delete('/users/:index', checkUserInArray, (req,res) => {
   const {index} = req.params;
   
   users.splice(index, 1);
   return res.json(users);
});




server.listen(3000);