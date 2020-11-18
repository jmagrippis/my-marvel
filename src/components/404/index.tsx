import Link from 'next/link'

const FourOhFour = () => (
  <main className="text-center sm:text-left">
    <h1 className="text-3xl mb-2">404 - Zoinks!</h1>
    <div className="text-xl">
      <h2 className="mb-4">We couldn’t find what you were looking for</h2>
      <Link href="/">
        <a className="button">try again from the homepage?</a>
      </Link>
    </div>
  </main>
)

export default FourOhFour
