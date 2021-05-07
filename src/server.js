//importar pluggins/dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js')


//iniciando o express
const server = express()

server
.use(express.static('public')) //cria automaticamente todas as rotas de arquivos public

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage) //não usa o ífem no kamel case
//ligar o servidor
server.listen(5500)