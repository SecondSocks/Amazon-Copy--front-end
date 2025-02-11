import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

import { ICartItem } from '@/types/cart.interface'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

export function CartActions({ item }: Readonly<{ item: ICartItem }>) {
	const { removeFromCart, changeQuantity } = useActions()

	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<div className='flex items-center gap-3'>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<FiMinus fontSize={13} />
				</button>

				<input
					disabled
					readOnly
					value={quantity}
					className='w-10 bg-black text-center'
				/>

				<button
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
					disabled={quantity === 1}
				>
					<FiPlus fontSize={13} />
				</button>

				<button
					onClick={() => removeFromCart({ id: item.id })}
					className='ml-3 text-dark-primary'
				>
					<FiTrash size={13} />
				</button>
			</div>
		</div>
	)
}
