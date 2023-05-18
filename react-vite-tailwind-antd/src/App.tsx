import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingFullPage } from './components/Loading';
import AppRoutes from './pages/Routes';
import { persistor } from './store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <PersistGate persistor={persistor} loading={<LoadingFullPage />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <ReactQueryDevtools
          initialIsOpen={false}
          position='bottom-right'
          panelPosition='right'
        />
      </QueryClientProvider>
    </PersistGate>
  );
}

export default App;
