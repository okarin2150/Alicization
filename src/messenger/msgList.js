import React from 'react'
import './chat.css'
import Conversation from './../messenger/conversation'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createNewConversation, setConvoList } from '../action/action'
import { connect } from 'react-redux'
import axios from 'axios'
class List extends React.Component {
    constructor () {
      super()
  
      this.state = {
        newConv: '',
        suggestionUsers: [],
        token: window.localStorage.getItem('token')
      }
    }

    handleClick (user) {
      let fdata = new FormData()
      fdata.append('token', this.state.token)
      fdata.append('user_id', user)
      ///this.props.dispatch(createNewConversation(this.state.newConv))
      
      axios.post('https://api.paywith.click/conversation/',fdata)  
      .then(function (response) {
      console.log('newCHAT',response.data.data)
       
      })
      .catch(function (error) {
      console.log(error)
      })
      //this.setState({ newConv: '' })


    }
    handleSearch () {
      let fdata = new FormData()
      fdata.append('token', this.state.token)
      fdata.append('query', this.state.newConv)
      fdata.append('size', 4)
  
      axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
        .then((response) => {
          console.log('dataAAADARDAA:', response.data.data.users)
          this.setState({ suggestionUsers: response.data.data.users })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    componentDidMount(){
      axios.get('https://api.paywith.click/conversation/',{
        params:{token: this.state.token}

      })  
      .then((response) => {
       console.log('DATA',response.data.data.conversation_details)
       this.props.dispatch(setConvoList(response.data.data.conversation_details))
       
      })
      .catch(function (error) {
      console.log(error);
      })





    }

    render(){
      console.log('Propssss',this.props)
        return(
            <div className="list">
              <div className="searchbar">
                <input type="text" value={this.state.newConv} className="search" placeholder="Search..." onChange={(e)=>this.setState({newConv:e.target.value})} />

                {/*** searchbar on top of conversations ***/}
                <Fab size="small" color="secondary" aria-label="add" onClick={()=>this.handleSearch()}>
                  <AddIcon />
                </Fab>

              </div>
              {
                this.state.suggestionUsers.map((user,index)=>{
                  return (
                    <span onClick={()=>this.handleClick(user.id)} key={user.id}>{user.email}</span>
                  )
                })
              }

              { this.props.conversationList.map((item, index) => {

                console.log('iiitem', item)
                return (
                  <Conversation 
                      key={index}
                      id={item.id}
                      name={item.users[0].email}
                      lastName={item.lastName}
                      latestMessage={item.latest_message}
                      unseenMessage={item.unseenMessage} 
                      date={item.latest_message_date}
                  />
                    

                      
                )
              })
              
              }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  conversationList: state.conversationList
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(List)