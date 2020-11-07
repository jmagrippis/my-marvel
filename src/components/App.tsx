import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ReactQueryCacheProvider, useErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'

import { Header } from './Header'
import { Footer } from './Footer'
import { getSeoProps } from './getSeoProps'
import { queryCache } from './queryCache'
import { ErrorFallback } from './ErrorFallback'

export const App = ({ Component, pageProps }: AppProps) => {
  const { reset } = useErrorResetBoundary()

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...getSeoProps()} />
      <ErrorBoundary onReset={reset} fallbackRender={ErrorFallback}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <div className="w-full flex flex-grow flex-col items-center justify-between">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </ReactQueryCacheProvider>
      </ErrorBoundary>
    </>
  )
}
