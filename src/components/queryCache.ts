import { QueryCache } from 'react-query'

const ONE_HOUR = 60 * 60 * 1000

export const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      staleTime: ONE_HOUR,
    },
  },
})
