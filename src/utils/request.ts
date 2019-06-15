import { fromFetch } from 'rxjs/fetch'
import { switchMap, catchError } from 'rxjs/operators'

const apiRoot = 'https://api.hnpwa.com/v0/'

export default {
  get(url: string, config = {}) {
    const data$ = fromFetch(`${apiRoot}${url}`, {
      method: 'GET',
      ...config
    }).pipe(
      switchMap(response => {
        return response.json()
      }),
      catchError(error => {
        return error
      })
    )

    return data$.subscribe({
      next: result => result,
      complete: () => console.log('done')
    })
  }
}
