import { auth } from '@clerk/nextjs'

const adminIds = ['user_2e0rngys5AdYGiMxr62tydYTrrG']

export const getIsAdmin = async () => {
	const { userId } = await auth()

	if (!userId) {
		return false
	}

	return adminIds.indexOf(userId) !== -1
}
