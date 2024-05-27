import { Header } from './_components/header/header'

type Props = Readonly<{
	children: React.ReactNode
}>

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main className='h-full pt-[50px] lg:pt-0'>
				<div className='max-w-screen-xl mx-auto pt-6 h-full'>{children}</div>
			</main>
		</>
	)
}

export default Layout
