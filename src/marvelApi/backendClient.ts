import crypto from 'crypto'

import { MarvelAPIClient } from './abstractClient'
import { EventsResponse } from './types'

class BackendClient extends MarvelAPIClient {
  #getHash = (ts: number) =>
    crypto
      .createHash('md5')
      .update(
        `${ts}${process.env.MARVEL_SECRET_KEY}${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
      )
      .digest('hex')

  #getAuthParams = (ts = new Date().getTime()) => ({
    ts,
    hash: this.#getHash(ts),
  })

  fetchEvent = async (id: number) => {
    const { data } = await this.client.get<EventsResponse>(`events/${id}`, {
      params: this.#getAuthParams(),
    })

    return data
  }

  fetchEvents = async () => {
    const { data } = await this.client.get<EventsResponse>('events', {
      params: this.#getAuthParams(),
    })

    return data
  }
}

export const backendClient = new BackendClient()
