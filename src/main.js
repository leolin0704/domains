const fastify = require('fastify')({
  logger: true
})

const fastifyStatic = require('fastify-static')
const path = require('path')

console.log( path.join(__dirname, 'main'))

// first plugin
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'static'),
  prefix: '/public/'
})

// fastify.use('/page', serveStatic(path.join(__dirname, '/main')))

fastify.get('/status', async (request, reply) => {
  reply.type('application/json').code(200)
  console.log(request)
  return { hello: 'world' }
})

fastify.get('/index', async (request, reply) => {
  reply.headers['cookie'] = 'test=' + new Date().toISOString() + '; HttpOnly'
  return reply.sendFile('index.html')
})

fastify.listen(3000, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})