import "./TaskForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TaskForm({ onSubmit }) {

  const [input, setInput] = useState("");
  
  const handleChange = (evento) =>{
    setInput(evento.target.value);
  }

  const handleSend = (evento) => {
    evento.preventDefault();
    const taskNew = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    onSubmit(taskNew);
    document.querySelector(".textArea_task").value = "";
    setInput("");
  }
  return (
    <form className="task_form" onSubmit={handleSend}>
      <div className="container_title_form">
        <span>Insertar Tareas</span>
      </div>
      <textarea
        placeholder="Escribir una tarea"
        className="textArea_task"
        onChange={handleChange}
      ></textarea>
      <button className="task_button">
        Agregar Tarea
      </button>
    </form>
  );
}
export default TaskForm;
