let data = require('@begin/data')

exports.handler = async function destroy(req) {
  await data.destroy({
    table: 'cats',
    key: req.params.catID
  })
  return {statusCode: 201}
}
