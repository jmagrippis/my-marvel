import { rootUrl } from 'lib/constants'

const defaultSeo = {
  title:
    'My Marvel | Query the Marvel API for your favourite events and characters!',
  description:
    'Did you ever wonder what the latest crossover events are in the Marvel universe? What your favourite hero has been up to? Wonder no more and use My Marvel to satisfy your curiosity in the most amazing way!',
  openGraph: {
    type: 'website',
    locale: 'en_UK',
    url: rootUrl,
    site_name: 'My Marvel',
    images: [
      {
        url: `${rootUrl}/logo.jpg`,
        width: 512,
        height: 512,
        alt: 'Johnny Magrippis',
      },
    ],
  },
  twitter: {
    handle: '@jmagrippis',
    cardType: 'summary',
  },
}

export const getSeoProps = ({
  title = defaultSeo.title,
  description = defaultSeo.description,
  openGraph = {},
  twitter = {},
} = {}) => ({
  title,
  description,
  openGraph: { ...defaultSeo.openGraph, title, description, ...openGraph },
  twitter: { ...defaultSeo.twitter, ...twitter },
})
