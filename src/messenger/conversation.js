import React from 'react'
import { connect } from 'react-redux'
import { getUserName, sendMessageScreen, sendCurrrenctCovId } from '../action/action.js'
import axios from 'axios'
var profileUrl = require('./../imgs/avatar.png')


class Conversation extends React.Component {
  constructor(){
    super()
    this.state={
      token:window.localStorage.getItem('token')
    }
  }

  handleclick(){
    this.props.dispatch(getUserName(this.props.name, this.props.lastName))
    this.props.dispatch(sendCurrrenctCovId(this.props.id))
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.id)
    fdata.append('size', 10)
    fdata.append('date', (new Date().getTime()/1000).toFixed(0))

    axios.post('https://api.paywith.click/conversation/details/',fdata)  
      .then((response)=> {
      console.log('MSGSCREEN',response.data.data)
      this.props.dispatch(sendMessageScreen(response.data.data.messages))
        
      
      })
      .catch(function (error) {
      console.log(error)
      })


  }
  render () {
    return (
      <div className='conversation' onClick={() =>this.handleclick()} >
        <img src={profileUrl} alt="." className="profileImg" />
        <div className="infoContainer">
          <div className='info1'>
            <span className="name">{this.props.name} {this.props.lastName}</span>
            <span> {this.props.date}</span>
          </div>
          <div className='info2'>
            <span>{this.props.latestMessage}</span>
            {/* <span className='unseen'> {this.props.unseenMessage}</span> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Conversation)