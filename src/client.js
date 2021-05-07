const fastify = require('fastify')({
  logger: true
})

const fastifyStatic = require('fastify-static')
const path = require('path')

console.log( path.join(__dirname, 'client'))

// first plugin
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'client'),
  prefix: '/public/'
})

fastify.listen(3100, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})