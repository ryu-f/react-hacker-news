import { API } from '@/services/API'
import { FeedItem } from '@/types/domain/hn'

type Parameter = {
  type: string
  paging: number
}

export default ({ type, paging }: Parameter) => {
  const url = `${type}/${paging}.json`
  return API<FeedItem[]>(url)
}
