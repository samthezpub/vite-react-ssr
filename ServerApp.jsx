// ServerApp.jsx
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './src/App.jsx';

// Export a function to render the app
export default function render(url, opts) {
    // Create a stream for server-side rendering
    const stream = renderToPipeableStream(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>,
        opts
    );

    return stream;
}