import { useDispatch} from "react-redux";
import { addTodo } from "../redux/actions";
import { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const handleSearch = e => {
      e.preventDefault()
      if(input !== '') {
          dispatch(addTodo(input)) 
          setInput('')
      } else {
          alert(`!Don't Submit blank Form!`)
      }
  }

  return (
    <form className="form-wrapper" onSubmit={handleSearch}>
        <input type="text" placeholder="Type your task" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit">+</button>
    </form>
  );
}

export default TodoForm;
