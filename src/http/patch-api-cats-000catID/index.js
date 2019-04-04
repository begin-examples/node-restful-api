let data = require('@begin/data')

exports.handler = async function getCats(req) {
  await data.set({
    table: 'cats',
    ...req.body,
  })
  return {
    statusCode: 201
  }
}
