import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoProvider from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
    <div className="App">
        <h1>New Todo</h1>
        <TodoForm />
        <TodoList />
    </div>
    </TodoProvider>
  );
}

export default App;
