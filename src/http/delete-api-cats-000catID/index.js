let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = arc.http.async(destroy)

async function destroy(req) {
  await data.destroy({
    table: 'cats',
    key: req.params.catID
  })
  return {statusCode: 201}
}
