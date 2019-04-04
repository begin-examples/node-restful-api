let data = require('@begin/data')

exports.handler = async function getCats(req) {
  await data.set({table:'cats', ...req.body})
  console.log(req)
  if (isXHR(req.headers)) {
    return {
      statusCode: 201
    }
  }
  else {
    return {
      statusCode: 302,
      location: '/',
    }
  }
}

function isXHR(headers) {
  if (!headers)
    return false
  if (headers['X-Requested-With'])
    return headers['X-Requested-With'] === 'XMLHttpRequest'
  if (headers['x-requested-with'])
    return headers['x-requested-with'] === 'XMLHttpRequest'
  return false
}
