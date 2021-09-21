import { deleteTodo } from "../redux/actions";
import { useDispatch} from "react-redux";

function TodoItem(props) {
  const dispatch = useDispatch();
  return (   
    <div className={props.checked ? 'item item-check' : 'item'} key={props.id}>
        <h5>{props.content}</h5>
        <button onClick={() => dispatch(deleteTodo(props.id))}>Delete</button>
    </div>
  );
}

export default TodoItem;
