import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import Orders from './pages/Orders/Orders';
import List from './pages/List/List';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://dilan-bakery-be.vercel.app"
  
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url}/>} />
            <Route path="/orders" element={<Orders url={url}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
