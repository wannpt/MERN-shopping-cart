import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import NavBar from './Components/navbar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/product/:id' component={ProductPage}/>
        <Route exact path='/cart' component={CartPage}/>
      </Switch>
    </Router>
  );
}

export default App;
