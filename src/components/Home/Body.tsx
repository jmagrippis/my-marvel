import { QueryStatus } from 'react-query'
import dynamic from 'next/dynamic'

import { Loading } from 'components/Loading'
import { useEvents } from 'marvelApi/useEvents'
import { EventsList } from './EventsList/EventsList'

import { ResponsiveHeading } from './ResponsiveTitle'

const BelowTheFold = dynamic(() => import('./BelowTheFold'))

export const Body = () => {
  const { data, status } = useEvents()

  return (
    <main className="w-full flex-grow container mb-4">
      <ResponsiveHeading className="mb-2" />
      {status === QueryStatus.Success ? (
        <EventsList events={data.results} />
      ) : (
        <Loading />
      )}
      <BelowTheFold />
    </main>
  )
}
