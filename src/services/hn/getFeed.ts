import KY from '@/services/KY'

export default function({ type, paging }: { type: string; paging: number }) {
  const url = `${type}/${paging}.json`
  return KY.get(url)
}
