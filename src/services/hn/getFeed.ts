import { FeedItem } from '@/types/domain/hn'
import KY from '@/services/KY'

type Parameter = {
  type: string
  paging: number
}

export default ({ type, paging }: Parameter) => {
  const url = `${type}/${paging}.json`
  return KY.get(url).json<FeedItem[]>()
}
