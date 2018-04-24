const data = require('./products.json')
const { send } = require('micro')
const { router, get } = require('microrouter')
const cors = require('micro-cors')()

const getData = (req, res) => send(res, 200, data)

const getProduct = (req, res) => send(res, 200, data.products.find(p => p.id === parseInt(req.params.id, 10)))

module.exports = router(get('/products', cors(getData)), get('/product/:id', cors(getProduct)))
