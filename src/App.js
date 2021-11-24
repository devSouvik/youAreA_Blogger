import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FrontPage from "./pages/FrontPage";
import ProfilePage from "./pages/ProfilePage";
import Blog_writing from "./pages/Blog_writing";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/blog-write" element={<Blog_writing />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}
export default App;
