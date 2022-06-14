
export function getTrends (woeid) {
  return new Promise((resolve, reject) => {
    fetch('/api/trends', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        woeid
      })
    })
      .then(res => {
        resolve(res.json())
      })
      .catch(err => {
        reject(err)
      })
  })
}
