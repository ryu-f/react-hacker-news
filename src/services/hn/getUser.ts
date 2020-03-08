import { API } from '@/services/API'
import { User } from '@/types/domain/hn'

export default ({ name }: { name: string }) => {
  const url = `user/${name}.json`
  return API<User>(url)
}
