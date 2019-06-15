import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'

const apiRoot = 'https://api.hnpwa.com/v0/'

export default {
  get(url: string, config = {}) {
    return ajax({
      method: 'GET',
      url: `${apiRoot}${url}`,
      ...config
    }).pipe(
      map(response => response),
      catchError(error => error)
    )
  }
}
