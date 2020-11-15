import { QueryStatus } from 'react-query'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

import { Loading } from 'components/Loading'
import { useEvents } from 'marvelApi/useEvents'
import { EventsList } from './EventsList/EventsList'

import { ResponsiveHeading } from './ResponsiveTitle'
import { EventsResponse, MarvelEvent } from 'marvelApi/types'
import { useEffect } from 'react'

const BelowTheFold = dynamic(() => import('./BelowTheFold'))

const reduceEventsResponse = (data: EventsResponse[]): MarvelEvent[] =>
  data.reduce<MarvelEvent[]>(
    (acc, group) => [...acc, ...group.data.results],
    []
  )

export const Body = () => {
  const { data, status, fetchMore, canFetchMore } = useEvents()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && canFetchMore && status === QueryStatus.Success) {
      fetchMore()
    }
  }, [inView, canFetchMore, status, fetchMore])

  return (
    <main className="w-full flex-grow container mb-4">
      <ResponsiveHeading className="mb-2" />
      {status === QueryStatus.Success ? (
        <EventsList events={reduceEventsResponse(data)} lastElementRef={ref} />
      ) : (
        <Loading />
      )}
      <BelowTheFold />
    </main>
  )
}
