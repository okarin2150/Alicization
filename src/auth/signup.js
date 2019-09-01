import React from 'react'
//import logo from '../../logo.svg'
//import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
export default class SignUp extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      retypePassword: '',
      error:''
    }

    //this.ParentHandler = this.ParentHandler.bind(this)
  }

  handleChange (e) {
    let name=e.target.name
    
    
    this.setState({ [name]: e.target.value })
    
    
  }
  handleRequest(){
      if(this.state.password===this.state.retypePassword){
        axios.post('https://api.paywith.click/auth/signup/', {
            email: this.state.email,
            password: this.state.password
            })
            .then(function (response) {
            console.log('DATA',response.data);
            window.localStorage.setItem('token',response.data.data.token)
            })
            .catch(function (error) {
            console.log(error);
            });
      }
      else{
          this.setState({error:'invalid password'})
      }

        
  }

  render () {
    console.log('state', this.state)    
    return (
      <div className='container'>
        <div className='loginPage'>
          
          <TextField
            variant='outlined'
            type='text'
            label='EMAIL'
            helperText='enter your email here'
            onChange={(e)=>this.handleChange(e)}
            name='email' 
          />
          <TextField
            variant='outlined'
            type='password'
            label='Password'
            helperText='and your password here'
            onChange={(e)=>this.handleChange(e)}
            name='password' 
          />
          <TextField
            variant='outlined'
            type='password'
            label='ReTypePassword'
            helperText='reType your password DUH!!'
            onChange={(e)=>this.handleChange(e)}
            name='retypePassword' 
          />
          <Button variant="contained" color="secondary" onClick={()=>this.handleRequest()}>sign up</Button>
          <p>{this.state.error}</p>

          
        </div>
      </div>
    )
  }
}