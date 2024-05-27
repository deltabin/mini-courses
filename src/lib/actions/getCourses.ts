'use server'

const apiUrl = process.env.COURSES_API_URL

export const getCourses = async () => {
	const response = await fetch(`${apiUrl}/courses`)

	if (!response.ok) throw new Error('Unable to fetch courses.')

	return response.json()
}

export const getCourseById = async (id: string) => {
	const response = await fetch(`${apiUrl}/courses/${id}`)

	if (!response.ok) throw new Error('Unable to fetch course by id.')

	return response.json()
}
