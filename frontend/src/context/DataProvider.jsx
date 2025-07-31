// src/context/DataProvider.jsx
import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState(''); // Store logged-in user info

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
