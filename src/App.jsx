import "./App.css";
import EfectoHero from "./Componentes/EfectoHero/EfectoHero";
import Tarea from "./Componentes/Tarea/Tarea";
import TaskForm from "./Componentes/TaskForm/TaskForm";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    } else {
      alert("El campo está vacío");
    }
  };
  const deleteTask = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    // está quitando el objeto que tiene ese id
    setTasks(tasksUpdated);
  };
  const completedTask = (id) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdated);
  };
  return (
    <div className="container_aplication">
      <EfectoHero></EfectoHero>
      <div className="container_principal">
        <div className="container_tasks">
          <div className="container_title_tasks">
            <span>Tareas Pendientes</span>
          </div>
          <div className="container_task_items">
            {/* como mostrar una lista de componentes */}
            {tasks.map((task) => (
              <Tarea
                key={task.id}
                id={task.id}
                text={task.text}
                completed={task.completed}
                completedTask={completedTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
        <div className="container_form_tasks">
          <TaskForm onSubmit={addTask}></TaskForm>
        </div>
      </div>
    </div>
  );
}

export default App;
