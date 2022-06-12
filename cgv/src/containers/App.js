import React from 'react';

import './App.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Header from '../component/Header';
const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    width:100%;
    min-width: 1040px;
  }
`;
function App() {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
