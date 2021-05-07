const fastify = require('fastify')({
  logger: true
})

const fastifyStatic = require('fastify-static')
const path = require('path')

console.log( path.join(__dirname, 'main'))

// first plugin
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'main'),
  prefix: '/public/'
})

// fastify.use('/page', serveStatic(path.join(__dirname, '/main')))

fastify.get('/status', async (request, reply) => {
  reply.type('application/json').code(200)
  console.log(request)
  return { hello: 'world' }
})

fastify.listen(3000, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})