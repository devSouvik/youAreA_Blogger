import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<h1>Add and change routes appropriately</h1>}
        />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}
export default App;
