import cn from 'classnames'

type Props = {
  className?: string
}

export const ResponsiveHeading = ({ className }: Props) => (
  <h2 className={cn('text-3xl', className)}>
    <span className="sm:hidden">Latest events</span>
    <span className="hidden sm:block">Explore our latest events</span>
  </h2>
)
