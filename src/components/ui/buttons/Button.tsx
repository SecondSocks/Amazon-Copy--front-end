import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = {
	variant: 'black' | 'white' | 'orange'
	size: 'sm' | 'md' | 'lg'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	variant,
	size,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl font-medium shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease',
				{
					'bg-primary text-secondary': variant === 'black',
					'bg-white text-primary': variant === 'white',
					'bg-primary text-white': variant === 'orange',
					'px-5 py-1 text-sm': size === 'sm',
					'px-10 py-1 text-base': size === 'md',
					'px-12 py-1.5 text-lg': size === 'lg'
				},
				className
			)}
		>
			{children}
		</button>
	)
}
