import "./App.css";
import { Route, Routes } from 'react-router-dom';
import {useState} from 'react';

import Artciles from "./pages/Articles";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Workers from "./pages/Workers";
import Info from "./pages/Info";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
        <MainNavigation/>
        <Routes>
          <Route path='/' element={<Info/>}></Route>
          <Route path='/articles' element={<Artciles/>} />
          <Route path='/workers' element={<Workers/>} />
          <Route path='/customers' element={<Customers/>} />
          <Route path='/orders' element={<Orders/>} />
        </Routes>
    </div>
  );
}

export default App;
