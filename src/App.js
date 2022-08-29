import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  
  const todos = [
    { id: 1, title: "React verstehen"   },
    { id: 2, title: "das Leben verstehen"   },
    { id: 3, title: "weinen"   },
    { id: 4, title: "die große Liebe finden"   },
    { id: 5, title: "nett sein"   },
    { id: 6, title: "in der Schule spicken"   },
  ]

  const [todoList, setTodoList] = useState(todos);
  console.log(todoList);

  function addTodo(newTodo){
    setTodoList([newTodo, ...todoList]);
  }

  function TodoItem({title}){
     return <li><input type="checkbox"/>{title}</li>
  }
  
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <ul>
        {todoList.map((todo) => <TodoItem key={todo.id}  title={todo.title}/>)}
      </ul>
    </div>
  );
}

export default App;
