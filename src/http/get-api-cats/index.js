let data = require('@begin/data')

exports.handler = async function getCats() {
  let cats = await data.get({table:'cats'})
  return {
    body: JSON.stringify(cats)
  }
}
