const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const nodejsinfo = require('nodejs-info');
const nodeinfo = require('node-info');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/nodejsinfo', (req, res) => res.send(nodejsinfo(req)))
  .get('/nodeinfo',nodeinfo({url: '/nodeinfo'}))
  .get('/db', (req, res) => res.render('pages/db', {results:[{id:1,name:"111"},{id:2,name:"222"}]}))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
