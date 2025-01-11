import cn from 'clsx'
import { PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

export function Heading({
	children,
	className
}: Readonly<PropsWithChildren<IHeading>>) {
	return (
		<div className={cn('font-semibold text-black text-3xl', className)}>
			{children}
		</div>
	)
}
