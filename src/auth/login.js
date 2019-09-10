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
import { withRouter } from 'react-router'
import validate from './../validation/validateFunction'
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


class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  }
    //const classes = useStyles();



  
  handleChange(e){
    let name=e.target.id
    this.setState({...this.state, fields: {...this.state.fields, [name]: e.target.value }})

  }
  handleClickShowPassword(){
    this.setState({showPassword:!this.state.showPassword})
  }
  handleMouseDownPassword(e){
    
    console.log('hey we here!')
    e.preventDefault()
  }
  handleMouseUpPassword(){
    
    console.log('now we here ')

  }
  handleError () {
    let valid = true
    const errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    console.log('errorrr', errors)
    this.setState({ errors },
      () => {
        Object.values(this.state.errors).map((item) => {
          if (item !== null) {
            valid = false
          }
        })
        if (valid) {
          this.handleRequest()
        }
      }
    )
  }
  handleRequest(){
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
    .then((response) => {
      console.log('sign in response :',response.data);
      window.localStorage.setItem('token',response.data.data.token)
      window.localStorage.setItem('user_id', response.data.data.profile.id)
      this.props.history.push('/messenger/')
    })

    .catch(function (error) {
      console.log(error);
    });



  }

  

  render(){
    console.log('state',this.state)
    return (
      
        
        
      
      <form>
        <div className='form'>
          <Typography variant='h5' gutterBottom>
            LOGIN HERE
          </Typography>



          <TextField
            //variant='outlined'
            type='text'
            label='Email'
            placeholder='your email here'
            //helperText='hey you might wanna type something here'
            onChange={(e)=>this.handleChange(e)}
            id='email' 
          />
          {this.state.errors.email !== null && <span className='error'>{this.state.errors.email}</span>}
        
          <TextField
                id="password"         
                //variant="filled"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Password"
                value={this.state.password}
                //helperText='salam khobi'
                placeholder='and your password here please'
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
          {this.state.errors.password !== null && <span className='error'>{this.state.errors.password}</span>}


          <Button variant="contained" color="secondary" onClick={()=>this.handleError()}>sign in</Button>

                      
        </div>
      </form>
      
    )
  }
    
}
export default withRouter(Login)
