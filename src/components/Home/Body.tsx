import { useEvents } from 'marvelApi/useEvents'
import dynamic from 'next/dynamic'
import { EventsList } from './EventsList/EventsList'

import { ResponsiveHeading } from './ResponsiveTitle'

const BelowTheFold = dynamic(() => import('./BelowTheFold'))

export const Body = () => {
  const { data } = useEvents()

  return (
    <main className="w-full flex-grow container mb-4">
      <ResponsiveHeading className="mb-2" />
      {data ? <EventsList events={data.results} /> : <div>loading...</div>}
      <BelowTheFold />
    </main>
  )
}
