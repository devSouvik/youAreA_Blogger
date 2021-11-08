
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import FrontPage from './pages/FrontPage';


function App() {
  return (
    <Router>
      <Routes>

         <Route path="/" element={<FrontPage />} />
         
        
         <Route path="*" element={<h1>Page not found</h1>} />
           
        
      </Routes>
    </Router>
  )
};
export default App;




