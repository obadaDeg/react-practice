import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const handleIncreament = () => {
    dispatch(counterActions.increament());
  };

  const handleIncrese = () => {
    dispatch(counterActions.increase(5));
  };

  const handleDecreament = () => {
    dispatch(counterActions.decreament());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleDecreament}>decreament</button>
        <button onClick={handleIncrese}>Increase by 5</button>
        <button onClick={handleIncreament}>increament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
