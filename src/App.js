import React from 'react';
import './App.css';
import Main from './components/mainComponent';
import { GlobalProvider } from './MainState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </div>
  );
}

export default App;
