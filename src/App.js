import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";
import { clearTodo } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const Todolist = useSelector((state) => state.todoReducers.todoList);
  const TodoDoneList = useSelector((state) => state.todoReducers.doneList);

  return (
    <div className="App">
      <h1>Add your todo Items</h1>
      <div className="app-wrap">
        <TodoForm />

        <div className="item-list">
          {Todolist.map(item => {
            return(
              <TodoItem
                id={item.id}
                content={item.content} 
              />
            )
          })}

          {TodoDoneList ? (
              TodoDoneList.map(item => {
                return(
                  <TodoItem
                    checked
                    id={item.id}
                    content={item.content} 
                  />
                )
              })
          ) : ('')}
        </div>

        <button className="CTA-btn" onClick={() => dispatch(clearTodo())}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
