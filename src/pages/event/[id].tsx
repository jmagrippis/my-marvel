import { GetServerSideProps } from 'next'

import MarvelEvent, { MarvelEventProps } from 'components/MarvelEvent'
import { backendClient } from 'marvelApi/backendClient'

type EventPageQuery = { id: string }

export const getServerSideProps: GetServerSideProps<
  MarvelEventProps,
  EventPageQuery
> = async (context) => {
  const { id } = context.query

  const response = await backendClient.fetchEvent(parseInt(id as string))
  const marvelEvent = backendClient.getEventFromResponse(response)
  // show 404 page if !marvelEvent

  return {
    props: {
      title: marvelEvent.title,
      description: marvelEvent.description,
      thumbnail: marvelEvent.thumbnail,
    },
  }
}

export default MarvelEvent
