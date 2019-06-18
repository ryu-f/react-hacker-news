import request from '@/services/request'

export default function({ id }: { id: number }) {
  const url = `item/${id}.json`
  return request.get(url)
}
