import React from 'react'
import './chat.css'
import { connect } from 'react-redux'


class Box extends React.Component{
    
    render() {
        console.log('prpssss:', this.props.messageList)
        return(
            <div className="box">
                
              {

                    this.props.messageList.map((message, index) => {
                        if (message.sender.id === 256) {
                        return (
                            <div key={index} className='sender'><span>{message.text}</span></div>
                        )
                        } else {
                        return (
                            <div key={index} className='receiver'><span>{message.text}</span></div>
                        )
                        }
                    })
             }

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  messageList: state.messageList
})

export default connect(mapStateToProps)(Box)
