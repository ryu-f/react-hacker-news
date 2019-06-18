const apiRoot = 'https://api.hnpwa.com/v0/'

export default {
  get(url: string, config = {}) {
    return fetch(`${apiRoot}${url}`, {
      method: 'GET',
      ...config
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then(response => response.json())
      .catch(error => error)
  }
}
