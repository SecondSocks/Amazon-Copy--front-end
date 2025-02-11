import Image from 'next/image'

import { ICartItem } from '@/types/cart.interface'

import { convertPrice } from '@/utils/convert-price'

import styles from '../Cart.module.scss'

import { CartActions } from './CartActions'

export function CartItem({ item }: Readonly<{ item: ICartItem }>) {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>{convertPrice(item.price)}</div>

				<CartActions item={item} />
			</div>
		</div>
	)
}
