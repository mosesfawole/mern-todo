/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { getTodos, reset } from "../features/todos/todoSlice";
import { deleteTodo } from "../features/todos/todoSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { todos, isLoading, isError, message, deleteTodo } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      return navigate("/login");
    }

    if (deleteTodo) {
      toast.success("Todo deleted successfully");
    }
    dispatch(getTodos());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch, deleteTodo]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Todos Dashboard</p>
      </section>

      <TodoForm />

      <section className="content">
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
        ) : (
          <h3>You have not set any todos</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
