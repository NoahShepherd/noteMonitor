import Fastify, { FastifyInstance, FastifyListenOptions } from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: false
    // logger: true
})

fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

fastify.listen({ port: 8381 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
})
// // CommonJs
// const fastify = require('fastify')({
//   logger: true
// })

// Declare a route
fastify.get('/', function (request, reply) {
  // insertData("test",[{
  //   "A":"A",
  //   "Path":"TEST",
  //   "C":"A",
  //   "D":"B"
  // },{
  //   "T":"A",
  //   "B":"A",
  //   "A":"B"
  // }])

  //fastify.log.info("HOME")
  reply.send({ hello: 'world' })
})
// mongodb://localhost:27017/monitor
// Run the server!
export default fastify