import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FrontPage from "./pages/FrontPage";
import ProfilePage from "./pages/ProfilePage";
import Blog_writing from "./pages/Blog_writing";
import Settings from "./pages/Settings";
import HomePage from "./pages/HomePage";
// import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NoAuth from "./components/common/NoAuth";
import Auth from "./components/common/Auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import User from "./components/Home_Page/User";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const subscription = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      subscription();
    };
  }, []);
  if (isAuthenticated === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NoAuth auth={isAuthenticated}>
              <FrontPage />{" "}
            </NoAuth>
          }
        />
        <Route
          path="/signin"
          element={
            <NoAuth auth={isAuthenticated}>
              <LoginPage />
            </NoAuth>
          }
        />
        <Route
          path="/register"
          element={
            <NoAuth auth={isAuthenticated}>
              <RegistrationPage />
            </NoAuth>
          }
        />
        <Route
          path="/home"
          element={
            <Auth auth={isAuthenticated}>
              <HomePage />
            </Auth>
          }
        />
        <Route
          path="/profile-page"
          element={
            <Auth auth={isAuthenticated}>
              <ProfilePage />
            </Auth>
          }
        />
        <Route
          path="/blog-write"
          element={
            <Auth auth={isAuthenticated}>
              <Blog_writing />
            </Auth>
          }
        />
        <Route
          path="/settings"
          element={
            <Auth auth={isAuthenticated}>
              <Settings />
            </Auth>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}
export default App;
