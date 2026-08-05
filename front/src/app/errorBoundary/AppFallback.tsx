import type { FallbackProps } from 'react-error-boundary';

export function AppFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div>
      <h1>Что-то пошло не так</h1>

      {/* <p>{error.message}</p> */}

      <button onClick={resetErrorBoundary}>
        Попробовать снова
      </button>
    </div>
  );
}