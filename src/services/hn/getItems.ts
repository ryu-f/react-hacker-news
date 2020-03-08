import { API } from '@/services/API'
import { Item } from '@/types/domain/hn'

export default ({ id }: { id: number }) => {
  const url = `item/${id}.json`
  return API<Item>(url)
}
