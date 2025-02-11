import Image from 'next/image'

import { useProfile } from '@/hooks/useProfile'

export function HeaderProfile() {
	const { profile } = useProfile()

	return (
		<div>
			{profile?.avatarPath && (
				<Image
					width={43}
					height={43}
					src={profile?.avatarPath}
					alt='profile'
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			)}
		</div>
	)
}
