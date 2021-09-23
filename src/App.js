import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";
import { clearTodo } from "./redux/actions";
import { useEffect, useState } from "react";
import TaskCounter from "./component/TaskCounter";

function App() {
  const dispatch = useDispatch();
  const Todolist = useSelector((state) => state.todoReducers.todoList);
  const TodoDoneList = useSelector((state) => state.todoReducers.doneList);
  const [option, setOption] = useState('uncomplete')

  useEffect(() => {}, [option]);

  return (
    <div className="App">
      <h1>Add your todo Items</h1>
      <div className="app-wrap">
        <TodoForm />

        <TaskCounter />

        {Todolist.length !== 0 || TodoDoneList.length !== 0 ? (
          <div className="custom-dropdown">
          <select onChange={(e) => setOption(e.target.value)}>
            <option value="uncomplete">Un-completed</option>
            <option value="complete">completed</option>
          </select>
        </div>
        ) : ``}
        <div className="item-list">
          {
            option === 'uncomplete' ? (
              Todolist.map((item) => {
                return <TodoItem id={item.id} content={item.content} />;
              })
            ) : (
              TodoDoneList.map((item) => {
                  return <TodoItem checked id={item.id} content={item.content} />;
                })
            )
          }    
        </div>

        {Todolist.length !== 0 || TodoDoneList.length !== 0 ? (
          <button className="CTA-btn" onClick={() => dispatch(clearTodo())}>
            Clear All
          </button>
        ) : ``}   
      </div>
    </div>
  );
}

export default App;
