import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { deleteTodo, finishTodo } from "../context/TodoReducer";

import Todo from "./Todo";

export default function TodoList() {
  const {state, dispatch} = useContext(TodoContext);

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

  //useState, useEffect, useReducer, useContext

  return (
    <>
    <h1>Todo List</h1>
    <div className='todo-container'>
      {state.todos.map((item) => 
          <Todo key={item.id} item={item} onDeleteClicked={deleteTodoItem}
          onFinishClicked={finishTodoItem}
          />)}
    </div>
    </>
  )
}
