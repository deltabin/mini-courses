import { getIsAdmin } from '@/lib/admin'
import { redirect } from 'next/navigation'

const AdminPage = async () => {
	const isAdmin = await getIsAdmin()

	if (!isAdmin) {
		redirect('/')
	}

	return <div>Admin Page</div>
}

export default AdminPage
