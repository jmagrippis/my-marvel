import { getImagePath, ImageRatio } from 'lib/getImagePath'
import { MarvelEvent } from 'marvelApi/types'

type Props = Pick<MarvelEvent, 'title' | 'description' | 'thumbnail'>

export const Body = ({ title, description, thumbnail }: Props) => (
  <main className="w-full flex-grow container mb-4">
    <h1 className="text-3xl mb-2">{title}</h1>
    <div className="sm:flex">
      <img
        src={getImagePath(thumbnail, ImageRatio.PortraitIncredible)}
        title={title}
        alt="event cover art"
        className="mx-auto mb-4 sm:mb-0 sm:ml-0 sm:mr-4"
      />
      <p>{description}</p>
      <section aria-label="related">
        <h2 className="text-xl">Featured characters</h2>
      </section>
    </div>
  </main>
)
