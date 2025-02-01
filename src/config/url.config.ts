export const API = 'http://localhost:4200/api'

export const URL = {
	STATISTICS: `${API}/main`,
	ORDERS: `${API}/orders`,
	PAYMENT: '/payment',
	AUTH: {
		register: `${API}/auth/register`,
		login: `${API}/auth/login`,
		'login-access-token': `${API}/auth/login/access-token`
	},
	USER: {
		profile: `${API}/users/profile`,
		'toggle-favorite': `${API}/users/profile/favorites`
	},
	CATEGORY: {
		ROOT: `${API}/categories`,
		'by-slug': `${API}/categories/by-slug`
	},
	REVIEW: {
		ROOT: `${API}/review`,
		create: `${API}/review/leave`,
		average: `${API}/review/average-by-product`
	},
	PRODUCTS: {
		ROOT: `${API}/products`,
		similar: `${API}/products/similar`,
		'by-slug': `${API}/products/by-slug`,
		'by-category': `${API}/products/by-category`
	}
}
