import React from 'react';
import './App.css';
import NavBar from './components/NavigationBar'
import Footer from './components/Footer'
import Middle from './components/Middle'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';  
import Login from './components/Login';
import News from './components/News'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
       <div >
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Middle}/>
            <Route exact path="/news" component={News}/>
            <Route exact path ="/login" component={Login}/>
            <Route exact path="/admin" component={Dashboard}/>
          </Switch>
        <Footer/>
    </div>
    </Router>

   
  );
}

export default App;
