# Example using useReducer (the structure)

In this example we look at a basic counter example and the use of `useReducer`.

Our code is located inside `App.js`.


Below is the useReducer hook we are using inside the App component.

The `useReducer` hook returns an array with a state and a dispatch method. The reducer function is an alternative to useState. 

```` javascript
const[state, dispatch] = useReducer(reducer,{count:0}) //we use dispatch to change the state
```` 

