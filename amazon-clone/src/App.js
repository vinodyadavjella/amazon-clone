import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from './Components/ContextAPI/StateProvider';
import { auth } from './Utilities/Firebase/Firebase';

function App() {

  const [{user}, dispatch] = useStateValue();

  //useEffect <<<<<<<<< powerful
  //code which runs based on a given condition

  useEffect(() => {
    //listner
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //the user is logged in..
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //the user is loggd out..
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      //Any clean up operation go in here.
      unsubscribe();
    }
  }, []);

  console.log("USER IS >>>>>", user);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
