import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createTodo } from "../features/todos/todoSlice";
function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo({ text }));
    setText("");
    if (text === "") {
      toast.error("Please enter a text");
    } else {
      toast.success("Todo created successfully");
    }
  };
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Todo</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button title="Add todo" className="btn btn-block" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </section>
  );
}
export default TodoForm;
