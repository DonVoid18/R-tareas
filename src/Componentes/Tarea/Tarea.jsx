import "./Tarea.css";
import { AiFillDelete } from "react-icons/ai";
function Tarea({ id, text, completed, completedTask, deleteTask }) {
  return (
    <div className={completed ? "container_task completed" : "container_task"}>
      <div className="task_text"onClick={() => completedTask(id)}>
        {text}
      </div>
      <div className="task_icon" onClick={() => deleteTask(id)}>
        <AiFillDelete></AiFillDelete>
      </div>
    </div>
  );
}
export default Tarea;
