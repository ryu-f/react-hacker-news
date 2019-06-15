import request from '@/utils/request'

export default function({ id }: { id: number }) {
  const url = `item/${id}.json`
  return request.get(url)
}
