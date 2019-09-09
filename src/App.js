import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './auth/login'
import Myapp from './drawer'
import MediaCard from './cards'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MyStore from './reducer/myStore'
import SignUp from './auth/signup'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Hook from './auth/Alternative_form'
import Messenger from './messenger/messenger';

//import { BrowserRouter as Router, Route } from 'react-router-dom'
const store = createStore(MyStore)
export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact  component={Login} />
          <Route path='/alt'  component={Hook} />
          <Route path='/messenger'  component={Messenger} />
          <Route path='/signup'  component={SignUp} />
          





        </Router>


      </Provider>
      
        
        

      
      

    )
  }
}
