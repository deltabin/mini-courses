import { Button } from '@/components/ui/button'
import {
	ClerkLoaded,
	ClerkLoading,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
} from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2'>
			<div className='relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0'>
				<Image src='/home-icon.svg' fill alt='home-tyan' />
			</div>
			<div className='flex flex-col items-center gap-y-8'>
				<h1 className='text-xl lg:text-3xl font-bold text-white max-w-[480px] text-center'>
					Неограниченное количество курсов, видеоуроков и многого другого...
				</h1>
				<div className='flex flex-col items-center gap-y-3 max-w-[330px] w-full '>
					<ClerkLoading>
						<Loader2 className='h-5 w-5 text-muted-foreground animate-spin' />
					</ClerkLoading>
					<ClerkLoaded>
						<SignedOut>
							<SignUpButton mode='modal'>
								<Button size='lg' variant='default' className='w-full'>
									Начать обучение
								</Button>
							</SignUpButton>
							<SignInButton mode='modal'>
								<Button
									size='lg'
									variant='link'
									className='w-full text-sky-500'
								>
									У меня уже есть учетная запись
								</Button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<Button size='lg' variant='default' className='w-full' asChild>
								<Link href='/courses'>Начать обучение</Link>
							</Button>
						</SignedIn>
					</ClerkLoaded>
				</div>
			</div>
		</div>
	)
}
