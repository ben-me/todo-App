import './TodoItem.css';

export default function TodoItem({ done, id, title, onToggleToDo }) {
    console.log(id)
    return (
        <li className={done ? 'finished' : ''}>
            <input type="checkbox" checked={done} onChange={() => onToggleToDo(id)}/>
            {title}
        </li>
        
    )

}