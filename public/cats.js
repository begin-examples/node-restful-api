let headers = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

async function create(cat) {
  await fetch('/api/cats', {
    method: 'post',
    body: JSON.stringify(cat),
    headers
  })
}

async function read(catID) {
  let url = `/api/cats${catID? '/'+catID : ''}`
  let result = await fetch(url)
  return await result.json()
}

async function update(cat.key) {
  await fetch(`/api/cats/${cat.key}`, {
    method: 'patch',
    body: JSON.stringify(cat),
    headers
  })
}

async function destroy(catID) {
  await fetch(`/api/cats/${catID}`, {
    method: 'delete',
    headers 
  })
}

export default {create, read, update, destroy}
