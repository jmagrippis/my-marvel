import { useInfiniteQuery } from 'react-query'

import { frontendClient } from './frontendClient'
import { EventsResponse } from './types'

export const useEvents = () =>
  useInfiniteQuery<EventsResponse>('events', frontendClient.fetchEvents, {
    getFetchMore: (lastGroup) => {
      const nextOffset = lastGroup.data.offset + frontendClient.pageLimit

      return nextOffset <= lastGroup.data.total ? nextOffset : false
    },
  })
