import { Dispatch, SetStateAction } from 'react'

import { EnumProductSort } from '@/types/product.interface'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

export function SortDropdown({
	sortType,
	setSortType
}: Readonly<ISortDropdown>) {
	return (
		<div className='text-right'>
			<select
				className='bg-gray-200 rounded-xl px-2 py-1'
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option
							key={key}
							value={EnumProductSort[key]}
							onChange={() => setSortType(EnumProductSort[key])}
						>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}
