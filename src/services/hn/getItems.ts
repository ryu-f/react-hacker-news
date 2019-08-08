import KY from '@/services/KY'

export default function({ id }: { id: number }) {
  const url = `item/${id}.json`
  return KY.get(url)
}
