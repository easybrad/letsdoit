import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <h1>This is a react Project</h1>
    <p>hoho, I have a react Project</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
