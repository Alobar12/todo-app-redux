import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteItems,selectFilteredTodos} from "../redux/todos/todosSlice";




function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos=useSelector(selectFilteredTodos)
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteItems(id));
    }
  };

 
  

  return (
    <ul className="todo-list">
      {filteredTodos.map((item, i) => (
        <li className={item.completed?"completed":""} key={i}>
          <div className="view">
            <input
              className="toggle"
              checked={item.completed}
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDestroy(item.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
