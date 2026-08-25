import { BrowserRouter } from 'react-router';
import './styles/App.scss';
import { AppRouter } from '@app/routers';
import { StoreProvider, type RootState } from './store';
import AuthProvider from './auth';
import { ErrorBoundary } from 'react-error-boundary';
import { AppFallback } from './errorBoundary/AppFallback';
import { ThemeSync } from '@/features/theme';
function App() {
  return (
    <StoreProvider>
      <ThemeSync />
      <ErrorBoundary
        FallbackComponent={AppFallback}
        onError={(error, info) => {
          console.error("ERROR ", error);
          console.error("INFO ", info);
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
