import { createContext, useReducer } from "react"
import { initialState, todoReducer } from "./TodoReducer";

//1. create a context using the createContext function
export const TodoContext = createContext({});

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

