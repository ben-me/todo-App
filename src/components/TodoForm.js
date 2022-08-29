import { nanoid } from 'nanoid';
import './todoForm.css';

export default function TodoForm({onAddTodo}) {
    

function handleClick(event){
    event.preventDefault();

    const form = event.target;
    const inputValue = form.title.value;

    const newTodo = {
        id: nanoid(),
        title: inputValue,
        isDone: false,
    }
    onAddTodo(newTodo);
    form.reset();
    }

    return (
            <form onSubmit={handleClick}>
              <label htmlFor="title">To-Do eingeben</label><br/>
               <input type='text' id="title" name='title'></input>
               <button >Add 2-do</button>
            </form>);
}