import { BrowserRouter } from 'react-router';
import './styles/App.scss';
import { AppRouter } from '@app/routers';
import { StoreProvider } from './store';

function App() {

  return (
    <StoreProvider>
      <BrowserRouter>
          {/* <ErrorBoundary> */}
              <AppRouter />
          {/* </ErrorBoundary> */}
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
