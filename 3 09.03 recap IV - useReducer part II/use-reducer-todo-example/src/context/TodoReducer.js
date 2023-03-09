//ACTION types as const (helpers)
export const ADD_TODO = 'ADD_TODO'; //declare action type as const 
export const DELETE_TODO = 'DELETE_TODO';
export const FINISH_TODO = 'FINISH_TODO';

//initial state for our reducer.
export const initialState = {
    todos:[]
}

//actions (what needs to be done)
export const addTodo = (payload) => ({
    type:ADD_TODO, //type of action that takes place / what does the reducer function have to do
    payload //the data we're sending along with that action
});

export const deleteTodo = (payload) => ({
    type:DELETE_TODO,
    payload
})

export const finishTodo = (payload) => ({
    type:FINISH_TODO, 
    payload
})


//reducer function --> reponsible for changing the state.
//action = object {type:'ADD_TODO', payload:{todoobject}}
export const todoReducer = (currentState = initialState, action) => {
    if(action.type === ADD_TODO){ //which type of action was provided
        //assign milliseconds since 1970 as unique id
        const newId = new Date().valueOf();
        action.payload.id = newId;

    
        return { //returning new object = CHANGING THE STATE
            ...currentState,
            todos:[...currentState.todos, action.payload] //payload = todoitem (javascript object)
        }
    }

    if(action.type === DELETE_TODO){
        return {
            ...currentState,
            todos:currentState.todos.filter(todo => todo.id !== action.payload) //payload will be the id 
        }
    }

    if(action.type === FINISH_TODO){
        //find the index of the element within the array.
        const indexTodo = currentState.todos.findIndex((item) => item.id === action.payload);
        //make a copy of the existing array with todos
        const newTodos = [...currentState.todos];
        //set the property to done 
        newTodos[indexTodo].done = true;

        return {
            ...currentState,
            todos:newTodos
        }
    }
}


