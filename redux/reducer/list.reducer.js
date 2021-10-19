//this reducer stores the values of the to do list

const listReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_TASKS' :
            return action.payload;
        default:
            return state;
    }
}