import KY from '@/services/KY'

export default function({ name }: { name: string }) {
  const url = `user/${name}.json`
  return KY.get(url)
}
