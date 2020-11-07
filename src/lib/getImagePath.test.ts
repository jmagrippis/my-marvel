import { getImagePath, ImageRatio } from './getImagePath'

it('formats the thumbnail according to the given ratio', () => {
  const thumbnail = {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
    extension: 'jpg',
  }

  const imagePath = getImagePath(thumbnail, ImageRatio.PortraitIncredible)

  expect(imagePath).toBe(
    '//i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_incredible.jpg'
  )
})

it('works with both http and https paths', () => {
  const httpThumbnail = {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
    extension: 'jpg',
  }
  const httpsThumbnail = {
    path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
    extension: 'jpg',
  }

  expect(getImagePath(httpThumbnail, ImageRatio.PortraitIncredible)).toBe(
    getImagePath(httpsThumbnail, ImageRatio.PortraitIncredible)
  )
})
