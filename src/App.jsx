
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import User from './Components/User';
import Filter from './Components/Filter';
import Business from './Components/Business';
import FastFood from './Components/FastFood';
import Beverages from './Components/Beverages';

// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
function App() {





  return (
    <>
      <BrowserRouter>

        
        <Routes>
          <Route path="/" element={ <> <Navbar /> <Home /></>}   />
          <Route path="/about" element={<> <Navbar /><About /></>} />
         
         
        <Route path="/*" element={<Navigate to="/" />} />


        <Route path="/user/:name" element={ <> <Navbar /> <User /></>} />
        <Route path="/Filter" element={ <> <Navbar /> <Filter /></>} />
        
        <Route path='/Business/' element={<><Navbar/><Business/>  </>}>
        
        <Route path='FastFood' element={<> <FastFood/> </>} />
        <Route path='Beverages' element={<> <Beverages/> </>} />

        </Route>
           
           

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
