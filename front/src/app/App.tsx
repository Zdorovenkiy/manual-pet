import { BrowserRouter } from 'react-router';
import './styles/App.scss';
import { AppRouter } from '@app/routers';

function App() {

  return (
      <BrowserRouter>
          {/* <ErrorBoundary> */}
              <AppRouter />
          {/* </ErrorBoundary> */}
      </BrowserRouter>
  )
}

export default App
