import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {INCREMENT, DECREAMENT} from "./redux/constants";

function App() {
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counterReducer);
  const increamentf = () => {
    dispatch({type:INCREMENT})
  }

  const deacrementf = () => {
    dispatch({type:DECREAMENT})
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increamentf}>+</button>
      <button onClick={deacrementf}>-</button>
    </div>
  );
}

export default App;
