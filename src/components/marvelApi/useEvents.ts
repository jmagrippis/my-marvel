import { useQuery } from 'react-query'

import { client } from './client'

const fetchEvents = () => client.get('events')

export const useEvents = () => useQuery('events', fetchEvents)
