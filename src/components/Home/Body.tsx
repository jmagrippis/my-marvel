import dynamic from 'next/dynamic'

const BelowTheFold = dynamic(() => import('./BelowTheFold'))

export const Body = () => (
  <main className="w-full flex-grow container">
    <div>Hello World!</div>
    <BelowTheFold />
  </main>
)
