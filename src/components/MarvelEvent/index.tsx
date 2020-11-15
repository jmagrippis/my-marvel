import { getSeoProps } from 'components/getSeoProps'
import { MarvelEvent as MarvelEventType } from 'marvelApi/types'
import { DefaultSeo } from 'next-seo'
import { Body } from './Body'

export type MarvelEventProps = Pick<
  MarvelEventType,
  'title' | 'description' | 'thumbnail'
>

const MarvelEvent = ({ title, description, thumbnail }: MarvelEventProps) => (
  <>
    <DefaultSeo
      {...getSeoProps({ title: `${title} | My Marvel`, description })}
    />
    <Body title={title} description={description} thumbnail={thumbnail} />
  </>
)

export default MarvelEvent
