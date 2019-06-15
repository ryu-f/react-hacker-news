import request from '@/utils/request'

export default function({ type, page }: { type: string; page: number }) {
  const url = `${type}/${page}.json`
  return request.get(url)
}
