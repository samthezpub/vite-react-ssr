// ClientApp.jsx
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// ClientApp.jsx
// Hydrate the root element with our app
hydrateRoot(document.getElementById('root'),
    <BrowserRouter>
        <App />
    </BrowserRouter>
);