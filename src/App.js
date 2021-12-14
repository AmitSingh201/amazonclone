import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Routes
} from "react-router-dom";

function App() {
  //BEM convenction
  
  return (
    <Router>
    <div className="app">
    <Header/>
       <Switch>
         <Route path="/Checkout">
             <Checkout/>
         </Route>
        <Route path='/'>
        <Home/>
        </Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
