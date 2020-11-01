import Link from 'next/link'
import { useRouter } from 'next/router'

import MarvelLogo from './logo.svg'

export const Header = () => {
  const { pathname } = useRouter()

  const HomeElement = pathname === '/' ? 'h2' : 'div'

  return (
    <header className="w-full bg-marvel-red text-white">
      <nav className="m-auto container flex flex-row items-center py-2">
        <HomeElement className="flex-grow">
          <Link href="/">
            <a className="flex items-center text-2xl">
              <span className="mr-1">my</span>
              <MarvelLogo className="w-32" />
            </a>
          </Link>
        </HomeElement>
      </nav>
    </header>
  )
}
