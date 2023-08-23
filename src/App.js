import { useState, useEffect } from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ViewProduct from './pages/ViewProduct';



function App() {




  return (
    <BrowserRouter >
    <Routes>
      <Route  path='/'  element={<HomePage/>}/>
      <Route  path='/view-product'  element={<ViewProduct/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
