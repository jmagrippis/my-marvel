import { MarvelEvent } from 'marvelApi/types'

import { EventItem } from './EventItem'

type Props = {
  events: MarvelEvent[]
}

export const EventsList = ({ events }: Props) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    {events.map(({ id, title, description, thumbnail }) => (
      <li key={id}>
        <EventItem
          title={title}
          thumbnail={thumbnail}
          description={description}
        />
      </li>
    ))}
  </ul>
)
