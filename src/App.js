import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";
import { clearTodo } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const Todolist = useSelector((state) => state.todoReducers.todoList);
  const TodoDoneList = useSelector((state) => state.todoReducers.doneList);

  const handleChange = (e) => {};

  return (
    <div className="App">
      <h1>Add your todo Items</h1>
      <div className="app-wrap">
        <TodoForm />

        <div className="custom-dropdown">
          <select onChange={(e) => handleChange(e)}>
            <option value="uncomplete">Un-completed</option>
            <option value="complete">completed</option>
          </select>
        </div>
        <div className="item-list">
          {TodoDoneList
            ? TodoDoneList.map((item) => {
                return <TodoItem checked id={item.id} content={item.content} />;
              })
            : "<h1>Nothing is completed</h1>"}

          {Todolist.map((item) => {
            return <TodoItem id={item.id} content={item.content} />;
          })}
        </div>

        <button className="CTA-btn" onClick={() => dispatch(clearTodo())}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
