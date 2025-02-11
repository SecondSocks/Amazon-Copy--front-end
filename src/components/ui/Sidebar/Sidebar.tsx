import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiLoader, FiLogIn, FiLogOut } from 'react-icons/fi'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useCategories } from '@/hooks/useCategories'

export function Sidebar() {
	const { data, isLoading } = useCategories()

	const pathname = usePathname()

	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<aside className='bg-secondary flex flex-col justify-between h-screen'>
			<div>
				{isLoading ? (
					<FiLoader />
				) : data ? (
					<>
						<div className='text-xl text-white mt-4 mb-6 ml-6'>Categories:</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											pathname === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>

			{!!user ? (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={() => logout()}
				>
					<FiLogOut />
					<span className='ml-2'>Logout</span>
				</button>
			) : (
				<Link
					className='text-white flex items-center ml-10 mb-10'
					href='/auth'
				>
					<FiLogIn />
					<span className='ml-2'>Login</span>
				</Link>
			)}
		</aside>
	)
}
