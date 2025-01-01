import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
      <App />
    </StrictMode>,
    );
} else {
    console.error("No se encontró el elemento con id 'root'");
}
