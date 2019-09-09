const Init = {
  firstName: '',
  lastName: '',
  messageList: [],
  conversationList: [],
  curentConvId:''
}


const MyStore = (state = Init, action) => {
  switch (action.type) {
    case 'SAVE_SELECTED_USER_NAME':
      return {
        ...state,
        firstName: action.name,
        lastName: action.family
      }

    case 'SEND_MSG_SCREEN':
      console.log('store state', action,state)
      return {
        ...state,
        messageList: action.payload
            
          
        
      }
    case 'CREATE_NEW_CONVERSATION':
      return {
        ...state,
        conversationList: [
          {
            firstName: action.payload,
            lastName: '',
            latestMessage: '',
            unseenMessage: '',
            profile: 'http://....'
          },
          ...state.conversationList
        ]
      }
    case 'CONVO_LIST':
      return {
        ...state,
        conversationList:action.payload
      }  
    case 'CURRENT_CONV_ID':
      return {
        ...state,
        curentConvId:action.payload
      }
    default:
      return state
  }
}
export default MyStore