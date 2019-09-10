import React from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import { sendNewMessage } from '../action/action'
import { connect } from 'react-redux'
import './chat.css'
import axios from 'axios'

class Footer extends React.Component {
    constructor (props) {
        super(props)
    
        this.state = {
          newMessage: '',
          token:window.localStorage.getItem('token')
        }
      }
      handleSend () {
        
        //this.props.dispatch(sendNewMessage(this.state.newMessage))
        let fdata = new FormData()
        fdata.append('token', this.state.token)
        fdata.append('conversation_id', this.props.conversation_id)
        fdata.append('text', this.state.newMessage)
        

        axios.post('https://api.paywith.click/conversation/create/',fdata)  
          .then((response)=> {
          console.log('MSGSCREEN',response.data.data)
          //this.props.dispatch(sendNewMessage(response.data.data.messages))
            
          
          })
          .catch(function (error) {
          console.log(error)
          })

        this.setState({ newMessage: '' })
      }


    render() {
      console.log('convid',this.props.conversation_id)
      var imgUrl = require('../imgs/Sendicon.png');
        return(
            <div className="footer">
                
                <TextField
                    id="filled-full-width"
                    label="Type here"
                    style={{ margin: 8 }}
                    placeholder="your message here"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    value={this.state.newMessage}
                    onChange={(e) => this.setState({ newMessage: e.target.value })}
                    
                />
                <Fab color="primary" aria-label="add" onClick={() => this.handleSend()} >
                  <img src={imgUrl} alt="send" className="sendImg" />
                </Fab>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
  })
const mapStateToProps = (state)=>({
  conversation_id:state.curentConvId


})  
  
export default connect(mapStateToProps,mapDispatchToProps)(Footer)