'use client'

import { BsCartCheck, BsCartCheckFill } from 'react-icons/bs'

import { COLORS } from '@/constants/color.constant'

import { IProduct } from '@/types/product.interface'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

export function AddToCartButton(product: Readonly<IProduct>) {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({ product, quantity: 1, price: product.price })
				}
			>
				{currentElement ? (
					<BsCartCheckFill color={COLORS.primary} />
				) : (
					<BsCartCheck color={COLORS.secondary} />
				)}
			</button>
		</div>
	)
}
