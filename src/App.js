import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// COMPONENTS
import Navigation from "./Components/Navigation";

//PAGES

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/transactions" element={<Index/>}></Route>
            <Route path="/transactions/new" element={<New/>}></Route>
            <Route path="/transactions/:id" element={<Show/>}></Route>
            <Route path="/transactions/:id/edit" element={<Edit/>}></Route>
            <Route path="*" element={<Error/>}></Route>
           
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
