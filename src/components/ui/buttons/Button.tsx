import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = {
	variant: 'black' | 'white' | 'orange'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	variant,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl font-medium shadow-lg px-10 py-2',
				{
					'bg-primary text-secondary': variant === 'black',
					'bg-white text-primary': variant === 'white',
					'bg-primary text-white': variant === 'orange'
				},
				className
			)}
		>
			{children}
		</button>
	)
}
