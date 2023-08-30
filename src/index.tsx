import ReactDOM from 'react-dom/client';
import App from './App/App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={client}>
    <App />    
  </QueryClientProvider>

);
