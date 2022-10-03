import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import SearchAppBar from './components/SearchAppBar/SearchAppBar';

const title = 'React client';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
    </div>
  );
}

export default App;
