let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = arc.http.async(update)

async function update(req) {
  await data.set({
    table: 'cats',
    ...req.body,
  })
  return {
    statusCode: 201
  }
}
