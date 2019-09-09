import React from 'react'
import Header from './header'
import Box from './chatBox'
import Footer from './footer'
import './chat.css'

class Chat extends React.Component {
    render() {
        return(
            <div className="chat">
                <Header />
                <Box />
                <Footer />
            </div>
        )
    }
}
export default Chat