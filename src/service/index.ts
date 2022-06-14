import { IClickedPosition } from '../store/index'

export function getClosestLocation (clickedPosition : IClickedPosition) {
  return new Promise((resolve, reject) => {
    fetch('/api/closest', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clickedPosition)
    })
      .then((res) => {
        resolve(res.json())
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export function getTrends (woeid : number) {
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
      .catch((err: any) => {
        reject(err)
      })
  })
}
