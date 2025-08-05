import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'; 

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 56 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
