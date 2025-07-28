


import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material'; 


function App() {
  return (
    <div >
    <Header />
    <Box style={{ marginTop: 56 }}> {/* Adjust margin to account for header height */}
      {/* Main content goes here */}
      {/* For example, you can add a Home component or any other content */}  
    <Home />
    </Box>
    {/* You can add a footer or other components here if needed */} 
    </div>
  );
}

export default App;
