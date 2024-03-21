import "./App.css";
import Home from "./Components/Home/home";
import Assessment from "./Components/Assessment/assessment";
import Tour from "./Components/VirtualTour/tour";
import Document from "./Components/Document/document";
import Assist from "./Components/Assistance/assist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommend from "./Components/Recommend/recommend";
import Comparision from "./Components/Comparision/compare";
import Admission from "./Components/Admission/admission";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="assessment" element={<Assessment/>} />
          <Route path="tour" element={<Tour/>} />
          <Route path="recommend" element={<Recommend/>} />
          <Route path="document" element={<Document/>} />
          <Route path="assist" element={<Assist/>} />
          <Route path="compare" element={<Comparision/>} />
          <Route path="admission" element={<Admission/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
