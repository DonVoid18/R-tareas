import "./TaskForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PanelControlEmojis from "../PanelControlEmojis/PanelControlEmojis";
function TaskForm({ onSubmit }) {
  const [input, setInput] = useState("");
  const [openPanel, setOpenPanel] = useState(false);

  const handleChange = (evento) => {
    setInput(evento.target.value);
    console.log(evento.target.value);
  };

  const handleSend = (evento) => {
    evento.preventDefault();
    const taskNew = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    onSubmit(taskNew);
    // document.querySelector(".textArea_task").value = "";
    setInput("");
  };
  const openPanelEmojis = () => {
    // setInput((value) => value + "😍");
    setOpenPanel((value) => !value);
  };
  const obtenerEmoji = (emoji) => {
    setInput((value) => value + emoji);
  };
  return (
    <form className="task_form" onSubmit={handleSend}>
      <div className="container_title_form">
        <span>Insertar Tareas</span>
      </div>
      <textarea
        placeholder="Escribir una tarea"
        className="textArea_task"
        value={input}
        onChange={handleChange}
      ></textarea>
      <div className="container_buttons_task_form">
        <button className="task_button">Agregar Tarea</button>
        <div className="container_icon_button" onClick={openPanelEmojis}>
          <span className="icon_item_button">🙂</span>
        </div>
      </div>
      <PanelControlEmojis panelDesac={openPanel} valueEmoji={obtenerEmoji}></PanelControlEmojis>
    </form>
  );
}
export default TaskForm;
