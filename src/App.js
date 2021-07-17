import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home'
import Credentials from './Components/Credentials/Credentials'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'



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
          {/* <Route component={} /> */}
        </Switch>
      </section>
    </BrowserRouter>      
    </div>
  );
}

export default App;
