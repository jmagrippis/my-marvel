import { MarvelEvent } from 'marvelApi/types'
import { FC } from 'react'

import { EventItem } from './EventItem'

type Props = {
  events: MarvelEvent[]
  lastElementRef: (node?: Element) => void
}

export const EventsList: FC<Props> = ({ events, lastElementRef }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    {events.map(({ id, title, description, thumbnail }, i) => (
      <li key={id} ref={i === events.length - 1 ? lastElementRef : undefined}>
        <EventItem
          title={title}
          thumbnail={thumbnail}
          description={description}
        />
      </li>
    ))}
  </ul>
)
