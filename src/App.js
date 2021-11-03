import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" exact>
           <h1>Add and change routes appropriately</h1>
         </Route>
         <Route path="*">
            <h1>Page not found</h1>
         </Route>
      </Switch>
    </Router>
  )
};
export default App;