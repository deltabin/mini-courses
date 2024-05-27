import { Button } from '@/components/ui/button'
import {
	ClerkLoaded,
	ClerkLoading,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
	return (
		<header className='h-20 w-full px-4'>
			<div className='lg:max-w-screen-xl mx-auto flex items-center justify-between h-full '>
				<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
					{/* <Image src='logo.svg' height={40} width={40} alt='Anilix' /> */}
					<Link
						href='/'
						className='text-2xl font-extrabold text-orange-500 tracking-wide'
					>
						Mini<span className='text-white'>Courses</span>
					</Link>
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
