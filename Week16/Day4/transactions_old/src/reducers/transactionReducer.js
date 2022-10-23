const initialState = {
    currentIndex: -1,
    // list: JSON.parse(localStorage.getItem('transactions'))
    list:[]
}

export const reducer=(state=initialState, action={})=>{
    switch(action.type){
        case 'INSERT':
            case 'UPDATE':
                case 'UPDATE_INDEX':
                    case 'DELETE':
        default: return state
    }
}