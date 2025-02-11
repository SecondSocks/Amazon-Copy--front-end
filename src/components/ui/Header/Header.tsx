import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'

import { Heading } from '../Heading'
import { Search } from '../Search/Search'

import { HeaderProfile } from './HeaderProfile'
import { HeaderCart } from './cart/HeaderCart'

export function Header() {
	return (
		<header
			className='bg-secondary text-white p-6 grid w-full'
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link
				href='/'
				className='flex gap-1 justify-center items-center'
			>
				<Image
					priority
					width={45}
					height={9}
					src='favicon.svg'
					alt='Amazon v2.0'
				/>
				<Heading className='text-xl text-white'>Amazon v2.0</Heading>
			</Link>
			<Search />
			<div className='flex items-center justify-end gap-10'>
				<Link
					href='/favorites'
					className='text-white'
				>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}
