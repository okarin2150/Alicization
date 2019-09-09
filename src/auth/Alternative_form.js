import React,{useState,useEffect} from "react"
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

export default function (props){
    const [names,setName]=useState({
        email:'',
        password:''
    })
    useEffect(()=>{
        axios.post('https://api.paywith.click/auth/signin/', {
            email: names.email,
            password: names.password
        })
        .then(function (response) {
        console.log('DATA',response.data);
        window.localStorage.setItem('token',response.data.data.token)
        })
        .catch(function (error) {
        console.log(error);
        });

        
            
        
        
        
          
    },[names.password])

    return(
        <div className='container'>
            <div className='loginPage' >
                <TextField
                    variant='outlined'
                    type='text'
                    label='UserName'
                    helperText=''
                    onChange={(e)=>setName({...names,email:e.target.value})}
                    name='username' 
                /> 
                
                <TextField
                    variant='outlined'
                    type='password'
                    label='Password'
                    helperText=''
                    onChange={(e)=>setName({...names,password:e.target.value})}
                    name='password' 
                /> 
                <p>{names.email}</p>




            </div>
        </div>
        







    );


}
