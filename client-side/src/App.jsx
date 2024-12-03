import "./App.css";
import Home from "./pages/Home";
import SearchResult from "./Pages/SearchResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
