import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
// COMPONENTS
import Navigation from "./Components/Navigation";
import Modal from "./Components/Modal";
//PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import Show from "./Pages/Show";
import Error from "./Pages/Error";
import New from "./Pages/New";
// import { Chart } from "chart.js";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navigation  />
        <main>
        
          <Routes>
            <Route path="/" element={<Home showModal={showModal} setShowModal={setShowModal} />}></Route>
            <Route path="/transactions" element={<Index  />}></Route>
            <Route path="/transactions/:id" element={<Show />}></Route>
            <Route path="/transactions/:id/edit" element={<Edit />}></Route>
            <Route path="/transactions/new" element={<New />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Router>
    </div>
  );
}

export default App;
