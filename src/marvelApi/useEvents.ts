import { useInfiniteQuery } from 'react-query'

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

const offsetToEtagCache: { [offset: number]: string } = {}

const fetchEvents = (_key: string, offset = 0) =>
  client
    .get<EventsResponse>('events', {
      params: {
        offset,
        limit: LIMIT,
        orderBy: '-modified',
      },
      headers: {
        'If-None-Match': offsetToEtagCache[offset],
      },
    })
    .then(({ data }) => {
      offsetToEtagCache[offset] = data.etag

      return data.data
    })

export const useEvents = () =>
  useInfiniteQuery<EventsResponse['data']>('events', fetchEvents, {
    getFetchMore: (lastGroup) => {
      const nextOffset = lastGroup.offset + LIMIT

      return nextOffset <= lastGroup.total ? nextOffset : false
    },
  })
