import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CounterProvider } from './hooks/counter-context.tsx';
import { SessionProvider } from './hooks/session-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterProvider>
      <SessionProvider>
        <App />
      </SessionProvider>
    </CounterProvider>
  </StrictMode>
);
