import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  
  const todos = [
    { id: 1, title: "React verstehen", isDone: false   },
    { id: 2, title: "das Leben verstehen", isDone: false   },
    { id: 3, title: "weinen", isDone: false   },
    { id: 4, title: "die große Liebe finden", isDone: false   },
    { id: 5, title: "nett sein", isDone: false   },
    { id: 6, title: "in der Schule spicken", isDone: false   },
  ]

  const [todoList, setTodoList] = useState(loadFromStorage() || todos);

  function loadFromStorage() {
    JSON.parse(localStorage.getItem('_todos'))
  }

  console.log(todoList);
  useEffect(() => {
    localStorage.setItem('_todos', JSON.stringify(todoList))
  }, [todoList])

  function toggleTodo(id) {
    const updatedToDos = todoList.map((singleTodo) => {
      if (singleTodo.id === id) {
        singleTodo.isDone = !singleTodo.isDone;
      }
      console.log(singleTodo.isDone)
      return singleTodo;
    })
    setTodoList(updatedToDos);
  }

  function addTodo(newTodo){
    setTodoList([newTodo, ...todoList]);
  }
  
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <ul>
        {todoList.map((todo) => 
        <TodoItem 
          done={todo.isDone}
          id={todo.id}
          key={todo.id}
          title={todo.title}
          onToggleToDo={toggleTodo}
          />
          )}
      </ul>
    </div>
  );
}

export default App;
