import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'
import { IconType } from 'react-icons'

import styles from './Field.module.scss'

type TypeField = {
	Icon: IconType
	placeholder: string
	legend: string
	error?: string
	className?: string
} & InputHTMLAttributes<HTMLInputElement>

const Field = forwardRef<HTMLInputElement, TypeField>(
	(
		{
			placeholder,
			legend,
			Icon,
			error,
			className,
			type = 'text',
			style,
			...rest
		},
		ref
	) => {
		return (
			<div
				className={cn('', className)}
				style={style}
			>
				<label className={styles.field}>
					<span>
						<Icon className='mr-2' />
						{legend}
					</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						className={cn({
							[styles.inputError]: error,
							[styles.input]: !error
						})}
						{...rest}
					/>
				</label>
				{error && <p className={styles.error}>{error}</p>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
