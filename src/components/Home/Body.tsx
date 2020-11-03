import dynamic from 'next/dynamic'

import { useEvents } from 'components/marvelApi/useEvents'

const BelowTheFold = dynamic(() => import('./BelowTheFold'))

export const Body = () => {
  useEvents()

  return (
    <main className="w-full flex-grow container">
      <div>Hello World!</div>
      <BelowTheFold />
    </main>
  )
}
