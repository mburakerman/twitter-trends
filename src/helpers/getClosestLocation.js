
export function getClosestLocation (clickedPosition) {
  return new Promise((resolve, reject) => {
    fetch('/api/closest', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clickedPosition)
    })
      .then(res => {
        resolve(res.json())
      })
      .catch(err => {
        reject(err)
      })
  })
}
