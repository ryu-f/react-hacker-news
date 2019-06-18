import request from '@/services/request'

export default function({ name }: { name: string }) {
  const url = `user/${name}.json`
  return request.get(url)
}
