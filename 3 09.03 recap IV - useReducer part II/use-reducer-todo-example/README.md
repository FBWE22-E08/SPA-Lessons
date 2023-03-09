# useReducer TODO App Example
In this example we are using context API in combination with useReducer to manage our global state. 

## Structure Application

Notice our `src` folder is subdivided in different folders: 
- `components `

   This is where we store our components we'll be using in our application. 

- `context`

    Here we will be storing our different contexts. In this specific case you can find the `TodoContext` here. We also placed our `TodoReducer.js` here. 


## Usage of context in this example
In this example we have a `TodoContext.jsx` file that contains our `TodoProvider` component and our `TodoContext`.

Take a look at the code sample below: 

``` javascript
//2. provider component => responsible for providing data to its children. 
//children are destructured from the props and placed inside Context.Provider.
export default function TodoProvider({children}) {
    //const [todos, setTodos] = useState([]);
    const [state, dispatch] = useReducer(todoReducer, initialState);
   
    
  return (
    <TodoContext.Provider value={{state, dispatch}} >
        {children}
    </TodoContext.Provider>
  )
}
```

In the above code sample you can see the usage of `useReducer`. The `useReducer` returns the array [state, dispatch]. The `useReducer()` takes as a first argument `todoReducer` function from `todoReducer.js` and as a second argument the `initialState` which can also be found in `todoReducer.js`


## Creating our reducer: `TodoReducer.js`
In `TodoReducer.js` you can find serveral items exported:

### Action types:
``` javascript
//ACTION types as const (helpers)
export const ADD_TODO = 'ADD_TODO'; //declare action type as const 
export const DELETE_TODO = 'DELETE_TODO';
export const FINISH_TODO = 'FINISH_TODO';
```

### Initial state:
``` javascript
//initial state for our reducer.
export const initialState = {
    todos:[]
}
```


### Actions:
Actions return a action object: 
- addTodo : `{type:'ADD_TODO', payload:payload}`
- deleteTodo : `{type:'DELETE_TODO', payload:payload}`
- finishTodo : `{type:'FINISH_TODO', payload:payload}`

``` javascript
//actions (what needs to be done)
export const addTodo = (payload) => ({
    type:ADD_TODO, //type of action that takes place / what does the reducer function have to do
    payload //the data we're sending along with that action
});

export const deleteTodo = (payload) => ({
    type:DELETE_TODO,
    payload
});

export const finishTodo = (payload) => ({
    type:FINISH_TODO, 
    payload
});
```

### Reducer function:
The reducer function is responsible for changing the state. It takes as first parameter the currentState and as a second paramter the action. 

Based on the `type` of action the state is changed in a different way. 

``` javascript
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
```

## Changing the state in `TodoList.jsx`:
 In `TodoList.jsx` you can find the usage of `dispatch` in two functions. One function is responsible for deleting the todo. (see `deleteTodoItem()`). The other function is responsible for marking a todo as done: (see `finishTodoItem()`).

 Both are dispatching the action which results into the state change. 

``` javascript
  const deleteTodoItem = (item)=> {
    //delete action
    console.log("Delete this item", item);
    dispatch(deleteTodo(item.id));
    //above line results in this happening:
    //dispatch({type:'DELETE_TODO', payload:item.id})
  }

  const finishTodoItem = (item) => {
    //we have to a make dispatch
    dispatch(finishTodo(item.id))
  }
  ```