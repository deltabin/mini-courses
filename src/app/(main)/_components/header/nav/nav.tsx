import { cn } from '@/lib/utils'
import { headers } from 'next/headers'
import Link from 'next/link'
import { NAVIGTATION } from './nav.data'

export const Navigation = () => {
	const heads = headers()

	const pathname = heads.get('next-url')

	return (
		<nav className='flex items-center gap-7'>
			{NAVIGTATION.map(nav => (
				<Link
					className={cn(
						'flex items-center gap-2',
						pathname == nav.href && 'text-neutral-300'
					)}
					key={nav.href}
					href={nav.href}
				>
					<nav.icon className={cn('h-5 w-5', nav.classNameForIcon)} />
					<span className='font-medium tracking-wide hover:text-neutral-300 transition delay-150'>
						{nav.label}
					</span>
				</Link>
			))}
		</nav>
	)
}
