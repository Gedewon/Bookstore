const ADD = 'BOOKSTORE/books/ADD';
const REMOVE = 'BOOKSTORE/books/REMOVE';


export default (state={},action)=>{
    switch(action.type){
        default:
            return state;
    }

}



export const addBook=(payload)=>({type:ADD,payload});

export const removeBook=(payload)=>({type:REMOVE,payload})







