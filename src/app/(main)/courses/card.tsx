// import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { truncate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ICourseCardItem {
	id: number
	title: string
	imageUrl: string
}

const CourseCardItem = ({ title, imageUrl, id }: ICourseCardItem) => {
	return (
		<Card>
			<CardHeader>
				<Image
					className='mx-auto'
					src={imageUrl}
					width={250}
					height={250}
					alt={title}
				/>
			</CardHeader>
			<CardContent>
				<p className='font-semibold'>{truncate(title, 28)}</p>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Link href={'courses/' + id}>
					<Button variant='ghost' className='border'>
						Начать
					</Button>
				</Link>
				{/* <Badge variant='secondary'>{episodes} СЕРИЙ</Badge> */}
			</CardFooter>
		</Card>
	)
}

export default CourseCardItem
