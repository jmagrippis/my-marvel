import { useInfiniteQuery } from 'react-query'

import { queryCache } from 'components/queryCache'
import { client } from './client'
import { MarvelEvent } from './types'

export type EventsResponse = {
  data: {
    count: number
    limit: number
    offset: number
    total: number
    results: MarvelEvent[]
  }
  etag: string
}

const LIMIT = 10

const fetchEvents = async (key: string, offset = 0) => {
  const cachedResponse = queryCache
    .getQueryData<EventsResponse[]>(key)
    ?.find((response) => response.data.offset === offset)

  const { data, status } = await client.get<EventsResponse>('events', {
    params: {
      offset,
      limit: LIMIT,
      orderBy: '-modified',
    },
    headers: {
      'If-None-Match': cachedResponse?.etag,
    },
    validateStatus: (status) =>
      (status >= 200 && status < 300) || status === 304,
  })

  return status === 304 ? cachedResponse : data
}

export const useEvents = () =>
  useInfiniteQuery<EventsResponse>('events', fetchEvents, {
    getFetchMore: (lastGroup) => {
      const nextOffset = lastGroup.data.offset + LIMIT

      return nextOffset <= lastGroup.data.total ? nextOffset : false
    },
  })
