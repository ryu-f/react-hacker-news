import { useEffect, useState } from 'react'

import { User } from '@/types/domain/hn'
import getUser from '@/services/hn/getUser'

/**
 *
 * @param name - User name
 *
 * @returns fetch user info & loading status
 *
 * @beta
 */
export const useFetchUser = (name: string) => {
  const [user, setUserInfo] = useState<User | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await getUser({ name }).catch(() => null)
      setUserInfo(response)
      setLoading(false)
    })()
  }, [])

  return { user, isLoading }
}
