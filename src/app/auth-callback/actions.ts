'use server'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export const getAuthStatus = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user?.id || !user.email) {
    throw new Error('Invalid user data')
  }

  // Here, you can simply return success without interacting with a database
  return { success: true }
}
