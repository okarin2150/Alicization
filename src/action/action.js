export const saveState = (title,text) => ({
    type: 'SAVE',
    title: title,
    text: text
  })
export const getUserName = (firstName, lastName) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  name: firstName,
  family: lastName
})
  
export const sendMessageScreen= (messagelist) => ({
    type: 'SEND_MSG_SCREEN',
    payload:messagelist
    
  })
  
export const createNewConversation = (name) => ({
    type: 'CREATE_NEW_CONVERSATION',
    payload: name
  })
export const setConvoList = (list) =>({
  type: 'CONVO_LIST',
  payload:list
}) 
export const sendCurrrenctCovId = (conv_id) =>({
  type :'CURRENT_CONV_ID',
  payload:conv_id
})