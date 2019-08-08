import KY from '@/services/KY'

export default function({ type, page }: { type: string; page: number }) {
  const url = `${type}/${page}.json`
  return KY.get(url)
}
