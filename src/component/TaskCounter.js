import { useSelector } from "react-redux";

function TaskCounter () {
    const Todolist = useSelector((state) => state.todoReducers.todoList);
    const TodoDoneList = useSelector((state) => state.todoReducers.doneList);

    return(
        <div className="tasks-counter">
          <div className="tasks-count">
            <span>📋uncomplete {Todolist.length}</span>
            <span>📋complete {TodoDoneList.length}</span>
          </div>
        </div>
    )
}

export default TaskCounter

