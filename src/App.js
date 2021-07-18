import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home'
import Credentials from './Components/Credentials/Credentials'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Checkout from './Checkout';



function App() {

  return (
    
    <div>
     <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/credentials" component={Credentials} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/checkout" component={Checkout} />
          {/* <Route component={} /> */}
        </Switch>
      </section>
    </BrowserRouter>      
    </div>
  );
}

export default App;
