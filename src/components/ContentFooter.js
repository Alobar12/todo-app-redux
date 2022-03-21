import React from "react";
import { useSelector } from "react-redux";
import { changeActiveFilter,clearCompleted,selectTodos } from "../redux/todos/todosSlice";
import { useDispatch } from "react-redux";


function ContentFooter() {
  const items = useSelector(selectTodos);
  const itemsLeft=items.filter((item)=>!item.completed).length
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch=useDispatch();


  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft>1?"s":""} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={activeFilter==="all"?"selected":""} onClick={()=>dispatch(changeActiveFilter("all"))}>
            All
          </a>
        </li>
        x
        <li>
          <a className={activeFilter==="active"?"selected":""} href="#/" onClick={()=>dispatch(changeActiveFilter("active"))}>Active</a>
        </li>
        <li>
          <a className={activeFilter==="completed"?"selected":""} href="#/" onClick={()=>dispatch(changeActiveFilter("completed"))} >Completed</a>
        </li>
      </ul>

      <button onClick={()=>dispatch(clearCompleted())} className="clear-completed">Clear completed</button>
    </footer>
  );
}
export default ContentFooter;
