import { getImagePath, ImageRatio } from 'lib/getImagePath'
import { MarvelEvent } from 'marvelApi/types'
import Link from 'next/link'

type Props = Pick<MarvelEvent, 'id' | 'title' | 'description' | 'thumbnail'>

export const EventItem = ({ id, title, description, thumbnail }: Props) => (
  <article className="grid grid-cols-1 sm:grid-cols-3 gap-2 pb-2 sm:pb-0 border-b sm:border-b-0 border-red-200">
    <img
      src={getImagePath(thumbnail, ImageRatio.PortraitIncredible)}
      title={title}
      alt="event cover art"
      className="mx-auto"
    />
    <div className="col-span-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mb-2">{description}</p>
      <Link href={`/event/${id}`}>
        <a className="button block sm:inline-block">read more</a>
      </Link>
    </div>
  </article>
)
