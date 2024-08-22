import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import Contact from './component/contact';
import About from './component/about';
import Login from './component/login';
import Blog from './component/blog'; // Ensure Blog component is imported
import FetchComponent from './component/about';


export const Appcontext= createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const client = new QueryClient({
    defaultOptions:  {
      queries :{
        refetchInterval:true,
        refetchOnReconnect:true,
      }
    }
  });

  const [username , setusername] = useState("herald collage")

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Appcontext.Provider value={{username,setusername}}>
        {/* <FetchComponent/> */}
        <Contact/>
        {/* {isLoggedIn ? (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Router>
        ) : (
          <Login onLogin={handleLogin} />
        )} */}
        </Appcontext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
