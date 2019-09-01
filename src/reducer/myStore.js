const initial = {
    title: '',
    text: '',
}    
const myStore = (state = initial, action) => {
    console.log('yyyy', action, state)
    switch (action.type) {
      case 'SAVE':
        return {
          ...state,
          title: action.title,
          text: action.text
        }
  
      
      default:
        return state
    }
  }
  
  export default myStore