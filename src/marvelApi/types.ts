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
