import { Button } from '@/components/ui/button'
import {
	ClerkLoaded,
	ClerkLoading,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs'
import { CommandIcon, Loader2, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from './nav/nav'

interface NavigationItem {
	label: string
	Icon?: LucideIcon
	href: string
}

const navigationItems: NavigationItem[] = [
	{
		label: 'Аниме',
		href: '/animes',
		Icon: CommandIcon,
	},
]

export const Header = () => {
	return (
		<header className='h-20 w-full px-4'>
			<div className='lg:max-w-screen-xl mx-auto flex items-center justify-between h-full'>
				<div className='flex items-center gap-6'>
					<div className='flex items-center'>
						{/* <Image src='logo.svg' height={40} width={40} alt='Anilix' /> */}
						<Link
							href='/'
							className='text-2xl font-extrabold text-orange-500 tracking-wide border-r pr-4'
						>
							Mini<span className='text-white'>Courses</span>
						</Link>
					</div>
					<Navigation />
				</div>
				<ClerkLoading>
					<Loader2 className='h-5 w-5 text-muted-foreground animate-spin' />
				</ClerkLoading>
				<ClerkLoaded>
					<SignedIn>
						<UserButton afterSignOutUrl='/' />
					</SignedIn>
					<SignedOut>
						<SignInButton
							mode='modal'
							afterSignInUrl='/profile'
							afterSignUpUrl='/profile'
						>
							<Button size='lg' variant='ghost'>
								Войти
							</Button>
						</SignInButton>
					</SignedOut>
				</ClerkLoaded>
			</div>
		</header>
	)
}
