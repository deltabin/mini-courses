import { getCourses } from '@/lib/actions/getCourses'
import { List } from './list'

export const revalidate = 10

const CoursesPage = async () => {
	const courses = await getCourses()

	console.log(courses)

	return (
		<div className='h-full px-3'>
			<h1 className='text-2xl font-bold'>Курсы</h1>
			<List courses={courses} activeCoursesId={9549} />
		</div>
	)
}

export default CoursesPage
