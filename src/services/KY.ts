import ky, { Options } from 'ky'

const API_ROOT = 'https://api.hnpwa.com/v0/'
const API = ky.create({ prefixUrl: API_ROOT })

export default {
  /**
   * export ky get method
   *
   * @param url - `Request` object, `URL` object, or URL string.
   * @returns A promise with `Body` methods added.
   */
  get(url: string | Request | URL, options?: Omit<Options, 'body'>) {
    return API.get(url, options)
  }
}
