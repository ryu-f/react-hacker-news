import { Item } from '@/types/domain/hn'
import KY from '@/services/KY'

export default ({ id }: { id: number }) => {
  const url = `item/${id}.json`
  return KY.get(url).json<Item>()
}
