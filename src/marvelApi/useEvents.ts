import { useQuery } from 'react-query'

import { client } from './client'
import { MarvelEvent } from './types'

type EventsResponse = {
  data: {
    results: MarvelEvent[]
  }
}

const fetchEvents = () =>
  client
    .get<EventsResponse>('events', {
      params: {
        limit: 10,
        orderBy: '-modified',
      },
    })
    .then(({ data }) => data.data)

export const useEvents = () =>
  useQuery<EventsResponse['data']>('events', fetchEvents)
