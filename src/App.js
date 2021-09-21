import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todoReducers.todolist);

  return (
    <div className="App">
      <h1>Add your todo Items</h1>

      <form className="form-wrapper">
        <input type="text" placeholder="Type your task" />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default App;
