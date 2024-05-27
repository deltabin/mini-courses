import { getCourseById } from '@/lib/actions/getCourses'
import Image from 'next/image'
export const revalidate = 10
export default async function Page({ params }: { params: { id: string } }) {
	const course = await getCourseById(params.id)

	if (course) {
		return (
			<section>
				<div className='flex justify-between'>
					<div className='w-6/12 my-auto text-center'>
						<span>Веб-разработка</span>
						<h1 className='font-semibold text-4xl my-3'>{course.title}</h1>
						<p className='text-white/80 text-base'>{course.desc.small}</p>
					</div>
					<div className='w-6/12 '>
						<Image
							className='rounded mx-auto'
							src={course.image}
							alt={course.title}
							width={440}
							height={260}
						/>
					</div>
				</div>
				<div className='rounded mt-7 flex justify-center'>
					<iframe
						width='1920'
						height='778'
						src='https://www.youtube.com/embed/SKRydSA2bYA'
						title='Основы HTML для Начинающих (в 2024)'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerpolicy='strict-origin-when-cross-origin'
						allowfullscreen
					></iframe>
				</div>
			</section>
		)
	}
}
