import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom'
import Login from "./components/Login"
import { UserProvider } from './components/MainContext';
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' exact element={<Dashboard/>}/>
        </Routes>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
