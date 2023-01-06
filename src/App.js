import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// COMPONENTS
import Navigation from "./Components/Navigation";
import Charts from "./Components/Charts";
//PAGES

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import Show from "./Pages/Show";
import Error from "./Pages/Error";
import New from "./Pages/New";
// import { Chart } from "chart.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main>
          {/* Show on all pages */}
          {/* <Charts /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/transactions" element={<Index />}></Route>
            <Route path="/transactions/:id" element={<Show />}></Route>
            <Route path="/transactions/:id/edit" element={<Edit />}></Route>
            <Route path="/transactions/new" element={<New />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
