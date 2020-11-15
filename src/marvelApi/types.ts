export type Thumbnail = {
  path: string
  extension: string
}

export type MarvelEvent = {
  id: number
  title: string
  description: string
  thumbnail: Thumbnail
}

export type EventsResponse = {
  data: {
    count: number
    limit: number
    offset: number
    total: number
    results: MarvelEvent[]
  }
  etag: string
}
