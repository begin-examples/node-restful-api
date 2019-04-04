let data = require('@begin/data')

exports.handler = async function getCats(req) {
  let cat = await data.get({
    table: 'cats',
    key: req.params.catID
  })
  return {
    body: JSON.stringify(cat)
  }
}
