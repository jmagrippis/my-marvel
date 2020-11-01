import Document, { Html, Head, Main, NextScript } from 'next/document'

export enum TrackEvent {
  Conversion = 'conversion',
}

type PlausibleArgs = [TrackEvent, () => void] | [TrackEvent]

declare global {
  const plausible: {
    (...args: PlausibleArgs): void
    q?: PlausibleArgs[]
  }

  interface Window {
    plausible?: typeof plausible
  }
}

// extending classes in Javascript?! The official suggestion from the Next.js team:
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            data-domain="my-marvel.com"
            src="https://plausible.io/js/plausible.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
