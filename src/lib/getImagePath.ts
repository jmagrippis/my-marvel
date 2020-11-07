import { Thumbnail } from 'marvelApi/types'

export enum ImageRatio {
  PortraitIncredible = 'portrait_incredible',
  StandardAmazing = 'standard_amazing',
  LandscapeIncredible = 'landscape_incredible',
}

export const getImagePath = (
  { path, extension }: Thumbnail,
  ratio: ImageRatio
) => `${path.replace(/https?:/gi, '')}/${ratio}.${extension}`
