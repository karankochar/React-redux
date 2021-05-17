//Initial state
let initialState = {
    quantity: 100
}


//define reducer
 const MobileReducer = (state = initialState, action) => {
    console.log('reducer');
    if(state.quantity>0){
    switch(action.type){
        case 'BUY_MOBILE':
            return{
                ...state,
                quantity:state.quantity-1
            }
        default:
            return state;
    }
    } else {
        return state;
    }
} 
export default MobileReducer;