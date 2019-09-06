let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = arc.http.async(getCats)

async function getCats() {
  let cats = await data.get({table: 'cats'})
  return {
    body: JSON.stringify(cats)
  }
}
