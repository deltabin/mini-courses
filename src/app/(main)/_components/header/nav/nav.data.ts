import { BookMarked, Cookie, Dices, Rocket } from 'lucide-react'
import type { INav } from './nav.interface'

export const NAVIGTATION: INav[] = [
	{
		label: 'Курсы',
		href: '/courses',
		icon: Rocket,
		classNameForIcon: 'text-red-500',
	},
	{
		label: 'Тесты',
		href: '/tests',
		icon: Cookie,
		classNameForIcon: 'text-green-500',
	},
	{
		label: 'Случайное',
		href: '/random',
		icon: Dices,
		classNameForIcon: 'text-sky-500',
	},
	{
		label: 'Помощь',
		href: '/question',
		icon: BookMarked,
		classNameForIcon: 'text-orange-500',
	},
]
