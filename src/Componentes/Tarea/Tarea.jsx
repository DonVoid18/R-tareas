import "./Tarea.css";
import { AiFillDelete, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
function Tarea({ id, text, completed, completedTask, deleteTask, editTask}) {
  const [ orText, setOrText ] = useState(false);
  const [ editCont, setEditCont] = useState(null);
  return (
    <div className={completed ? "container_task completed" : "container_task"}>
      <div
        className="task_text"
        onBlur={(e) => {
          editTask(id,e.currentTarget.textContent);
          setOrText(false);
        }}
        onFocus={()=> {
          setOrText(!orText);
        }}
        contentEditable={!completed}
        suppressContentEditableWarning={true}
        spellCheck={orText}
      >
        {text}
      </div>
      <div className="task_icon" onClick={() => completedTask(id)}>
        {
          (completed) ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
        }
      </div>
      <div className="task_icon" onClick={() => deleteTask(id)}>
        <AiFillDelete></AiFillDelete>
      </div>
    </div>
  );
}
export default Tarea;
