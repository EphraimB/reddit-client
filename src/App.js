import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import SearchAppBar from './components/SearchAppBar/SearchAppBar';
import MediaCard from './components/MediaCard/MediaCard';
import Grid2 from '@mui/material/Unstable_Grid2';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Grid2 container spacing={{ xs: -12, md: -13 }} columns={{ xs: 1, sm: 2 }}>
        <MediaCard />
      </Grid2>
    </div>
  );
}

export default App;
