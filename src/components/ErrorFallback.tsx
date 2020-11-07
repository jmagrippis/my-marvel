import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => (
  <div>
    <div className="text-2xl font-bold mb-4">Zoinks!</div>
    <div>
      There was an error!
      <button onClick={() => resetErrorBoundary()}>Try again</button>
    </div>
  </div>
)
