import { BrowserRouter } from 'react-router';
import './styles/App.scss';
import { AppRouter } from '@app/routers';
import { StoreProvider } from './store';
import AuthProvider from './auth';
import { ErrorBoundary } from 'react-error-boundary';
import { AppFallback } from './errorBoundary/AppFallback';
function App() {

  return (
    <StoreProvider>
      <ErrorBoundary
      FallbackComponent={AppFallback}
      onError={(error, info) => {
        console.error(error, info);
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
    </StoreProvider>
  )
}

export default App
