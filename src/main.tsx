import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';

export function mountReactApp(AppComponent: React.FC, rootElementId: string) {
  const rootElement = document.getElementById(rootElementId);
  if (!rootElement) return;
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>
  );
}


