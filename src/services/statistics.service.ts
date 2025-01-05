import { IStatisticsResponse } from '@/types/statistics.interface'

import { URL } from '@/config/url.config'

import { instance } from '@/api/api.interceptor'

class StatisticsService {
	async getStatistics() {
		return instance<IStatisticsResponse[]>({
			url: URL.STATISTICS,
			method: 'GET'
		})
	}
}

export const statisticsService = new StatisticsService()
