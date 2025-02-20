import { createRoot } from 'react-dom/client';
import App  from './App';
import "./globals.css";
import "./recipestyle.css";
import "../src/loader.css";
import "../src/responsive.css"
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
 