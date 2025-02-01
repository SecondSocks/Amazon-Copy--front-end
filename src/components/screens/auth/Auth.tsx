'use client'

import cn from 'clsx'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdOutlineMail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'

import Field from '@/ui/Field/Field'
import { Button } from '@/ui/buttons/Button'

import Meta from '@/config/Meta'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './Auth.module.scss'
import { useAuthRedirect } from './useAuthRedirect'

export function Auth() {
	useAuthRedirect()

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { isLoading } = useAuth()
	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		if (type === 'register') register(data)
		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.form}
				>
					<header>
						<div
							className={cn({
								[styles.active]: type === 'login'
							})}
						>
							<label
								htmlFor='login'
								className='font-semibold capitalize text-xl cursor-pointer'
							>
								Login
							</label>
							<input
								id='login'
								type='radio'
								className='hidden'
								checked={type === 'login'}
								onChange={() => setType('login')}
							/>
						</div>
						<div
							className={cn({
								[styles.active]: type === 'register'
							})}
						>
							<label
								htmlFor='register'
								className='font-semibold capitalize text-xl cursor-pointer'
							>
								Register
							</label>
							<input
								id='register'
								type='radio'
								className='hidden'
								checked={type === 'register'}
								onChange={() => setType('register')}
							/>
						</div>
					</header>
					<Field
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address'
							}
						})}
						Icon={MdOutlineMail}
						placeholder='Enter your email'
						error={errors.email?.message}
						legend={'Email'}
					/>
					<Field
						{...formRegister('password', {
							required: 'Password is required',
							minLength: {
								value: 8,
								message: 'Password must be at least 6 characters'
							}
						})}
						Icon={RiLockPasswordLine}
						placeholder='Enter your password'
						type='password'
						error={errors.password?.message}
						legend={'Password'}
					/>
					<Button variant='black'>
						{type === 'login' ? 'Sign in' : 'Sign up'}
					</Button>
				</form>
			</section>
		</Meta>
	)
}
