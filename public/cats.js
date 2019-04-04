let headers = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

async function create(cat) {
  console.log('create', cat)
  await fetch('/api/cats', {
    method: 'post',
    body: JSON.stringify(cat),
    headers
  })
}

async function read(catID) {
  console.log('read', catID)
  let url = catID? `/api/cats/${catID}` : '/api/cats'
  let result = await fetch(url)
  return await result.json()
}

async function update(cat) {
  console.log('update', cat)
  await fetch(`/api/cats/${cat.key}`, {
    method: 'patch',
    body: JSON.stringify(cat),
    headers
  })
}

async function destroy(catID) {
  console.log('destroy', catID)
  await fetch(`/api/cats/${catID}`, {
    method: 'delete',
    headers 
  })
}

export default {create, read, update, destroy}
