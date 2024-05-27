'use client'

import { cn } from '@/lib/utils'
import AnimeCardItem from './card'

type Props = {
	courses: any
	activeCoursesId: number
}

export const List = ({ courses, activeCoursesId }: Props) => {
	return (
		<div
			className={cn(
				'pt-6 grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-4'
				// 'lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]'
			)}
		>
			{courses.map((course: any) => {
				return (
					// Сделать галочку для просмотренных аниме
					<AnimeCardItem
						key={course.id}
						id={course.id}
						title={course.title}
						imageUrl={course.image}
					/>
				)
			})}
		</div>
	)
}
