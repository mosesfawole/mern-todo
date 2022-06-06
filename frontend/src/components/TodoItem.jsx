import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { deleteTodo } from "../features/todos/todoSlice";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className="todo">
      {new Date(todo.createdAt).toLocaleString("en-us")}
      <h2> {todo.text}</h2>
      <button
        onClick={() =>
          dispatch(
            deleteTodo(todo._id),
            toast.success("Todo deleted successfully")
          )
        }
        className="close"
      >
        <FaTimes />
      </button>
    </div>
  );
}
export default TodoItem;
