import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { ruRU } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const fontSans = localFont({
	src: [
		{
			path: '../../public/fonts/SF-Pro/SF-Pro-Display-Regular.woff2',
			weight: '400',
		},
		{
			path: '../../public/fonts/SF-Pro/SF-Pro-Display-Medium.woff2',
			weight: '500',
		},
		{
			path: '../../public/fonts/SF-Pro/SF-Pro-Display-Semibold.woff2',
			weight: '600',
		},
		{
			path: '../../public/fonts/SF-Pro/SF-Pro-Display-Bold.woff2',
			weight: '700',
		},
		{
			path: '../../public/fonts/SF-Pro/SF-Pro-Display-Heavy.woff2',
			weight: '800',
		},
	],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Anilix',
	description: 'Кинотеатр',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			localization={ruRU}
			appearance={{
				baseTheme: dark,
				variables: { colorPrimary: '#f97316' },
			}}
		>
			<html lang='ru' suppressHydrationWarning>
				<body
					className={cn(
						'bg-background font-sans antialiased',
						fontSans.variable
					)}
				>
					<ThemeProvider
						attribute='class'
						forcedTheme='dark'
						storageKey='anilix-theme'
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
