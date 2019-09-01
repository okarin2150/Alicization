import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import clsx from 'clsx'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import axios from 'axios'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));


export default class Login extends React.Component {

  constructor(){
    super()
    this.state={
      showPassword: false,
      password: '',
      username:''
    }
    //const classes = useStyles();



  }
  handleChange(e){
    let name=e.target.id
    //let change=this.state
    //change[name]=event.target.value
    this.setState({ [name]: e.target.value })
    console.log(e.target)

    
  }
  handleClickShowPassword(){
    this.setState({showPassword:!this.state.showPassword})
  }
  handleMouseDownPassword(e){
    let a=e.target.value
    console.log('hey we here!',a)
    e.preventDefault()
  }
  handleMouseUpPassword(){
    
    console.log('now we here ')

  }
  handleRequest(){
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.username,
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

  

  render(){
    console.log('state',this.state)
    return (
      
        
        
      
      <div className='container'>
        
      


        <div className='loginPage'>
          <TextField
            variant='outlined'
            type='text'
            label='UserName'
            helperText='hey you might wanna type something here'
            onChange={(e)=>this.handleChange(e)}
            id='username' 
          />
        
          <TextField
                id="password"
                
                variant="filled"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Password"
                value={this.state.password}
                helperText='salam khobi'
                placeholder='placeholder!'
                //error={true}
                onChange={(e)=>this.handleChange(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={()=>this.handleClickShowPassword()}
                        onMouseDown={(e)=>this.handleMouseDownPassword(e)}
                        onMouseUp={()=>this.handleMouseUpPassword()}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
          />
          <Button variant="contained" color="secondary" onClick={()=>this.handleRequest()}>sign in</Button>

                      
        </div>
      </div>
      
    )
  }
    
}
