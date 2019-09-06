let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = arc.http.async(getCat)

async function getCat(req) {
  let cat = await data.get({
    table: 'cats',
    key: req.params.catID
  })
  return {
    body: JSON.stringify(cat)
  }
}
