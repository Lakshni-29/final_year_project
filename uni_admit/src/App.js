import "./App.css";
import Home from "./Components/Home/home";
import Assessment from "./Components/Assessment/assessment";
import Tour from "./Components/VirtualTour/tour";
import {ToastContainer, toast} from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Recommend from "./Components/Recommend/recommend";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <ToastContainer position='top-center' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="assessment" element={<Assessment/>} />
          <Route path="tour" element={<Tour/>} />
          <Route path="recommend" element={<Recommend/>} />
                  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
