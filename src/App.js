import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" exact>
           <FrontPage/>
         </Route>
         <Route path="*">
            <h1>Page not found</h1>
         </Route>
      </Switch>
    </Router>
  )
};
export default App;

