
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Error404 from './Components/Error404';

// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
function App() {





  return (
    <>
      <BrowserRouter>

        
        <Routes>
          <Route path="/" element={ <> <Navbar /> <Home /></>}   />
          <Route path="/about" element={<> <Navbar /><About /></>} />
          {/* to show error page if wrong url is hit */}
          {/* <Route path="/*" element={<Error404 />} /> */}

          {/* suppose i want that if any wrong url entered then it rediect to home page then
          I have to import Naviate and then define route like this */}

        <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
