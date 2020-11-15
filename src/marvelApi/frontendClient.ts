import { QueryCache } from 'react-query'

import { MarvelAPIClient } from './abstractClient'
import { EventsResponse } from './types'
import { queryCache } from 'components/queryCache'

class FrontendClient extends MarvelAPIClient {
  #queryCache: QueryCache

  constructor({ queryCache }: { queryCache: QueryCache }) {
    super()
    this.#queryCache = queryCache
  }

  fetchEvents = async (key: string, offset = 0) => {
    const cachedResponse = this.#queryCache
      .getQueryData<EventsResponse[]>(key)
      ?.find((response) => response.data.offset === offset)

    const { data, status } = await this.client.get<EventsResponse>('events', {
      params: {
        offset,
        limit: this.pageLimit,
        orderBy: '-modified',
      },
      headers: {
        'If-None-Match': cachedResponse?.etag,
      },
      validateStatus: (status: number) =>
        (status >= 200 && status < 300) || status === 304,
    })

    return status === 304 ? cachedResponse : data
  }

  fetchEvent = async (id: number) => {
    const { data } = await this.client.get<EventsResponse>(`events/${id}`)

    return data
  }
}

export const frontendClient = new FrontendClient({ queryCache })
