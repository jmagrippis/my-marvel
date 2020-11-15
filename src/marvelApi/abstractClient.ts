import axios from 'axios'

import { EventsResponse } from './types'

export abstract class MarvelAPIClient {
  protected client = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
      apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    },
  })
  readonly pageLimit = 10

  abstract fetchEvents: (key: string, offset: number) => Promise<EventsResponse>
  getEventsFromResponse = (response: EventsResponse) => response.data.results

  abstract fetchEvent: (id: number) => Promise<EventsResponse>
  getEventFromResponse = (response: EventsResponse) =>
    this.getEventsFromResponse(response)[0]
}
