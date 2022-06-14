const ADD = 'BOOKSTORE/books/ADD';
const REMOVE = 'BOOKSTORE/books/REMOVE';


export default (state=[],action)=>{
    switch(action.type){
        case ADD:
            return [
                ...state,
                action.payload
            ]
        case REMOVE:
            return state.filter(book=>book.id !== action.payload)
        default:
            return state;
    }

}



export const addBook=(payload)=>({type:ADD,payload});

export const removeBook=(id)=>({type:REMOVE,id})







