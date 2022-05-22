import "./App.css";
import EfectoHero from "./Componentes/EfectoHero/EfectoHero";
import EfectCuar from "./Componentes/EfectoCuar/EfectoCuar";
import EfectFlower from "./Componentes/EfectoFlower/EfectoFlower";
import EfectoFlow2 from "./Componentes/EfectoFlow2/EfectoFlow2";
import Tarea from "./Componentes/Tarea/Tarea";
import TaskForm from "./Componentes/TaskForm/TaskForm";
import { useState } from "react";
import Fonds from "./Componentes/Fonds/Fonds";
function App() {
  const tasksLocal = JSON.parse(localStorage.getItem("ObjectTask"));
  const fondAplication = JSON.parse(localStorage.getItem("fondAplication"));
  const [fond, setFond] = useState(
    fondAplication === null ? (
      <EfectoHero></EfectoHero>
    ) : (
      () => {
        let fond;
        switch (fondAplication) {
          case "fond-1":
            fond = <EfectoHero></EfectoHero>;
            break;
          case "fond-2":
            fond = <EfectCuar></EfectCuar>;
            break;
          case "fond-3":
            fond = <EfectFlower></EfectFlower>;
            break;
          case "fond-4":
            fond = <EfectoFlow2></EfectoFlow2>;
            break;
          default:
            fond = <EfectoHero></EfectoHero>;
            break;
        }
        return fond;
      }
    )
  );
  const [tasks, setTasks] = useState(tasksLocal === null ? [] : tasksLocal);
  const addTask = (task) => {
    if (task.text.trim()) {
      // agregar en el localstorage

      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
      updateLocalStorage(tasksUpdated);
    } else {
      alert("El campo está vacío");
    }
  };
  const deleteTask = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    // está quitando el objeto que tiene ese id
    setTasks(tasksUpdated);
    updateLocalStorage(tasksUpdated);
  };
  const completedTask = (id) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdated);
    updateLocalStorage(tasksUpdated);
  };
  const editTask = (id, newTextTask) =>{
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.text = newTextTask;
      }
      return task;
    });
    setTasks(tasksUpdated);
    updateLocalStorage(tasksUpdated);
  }
  const updateLocalStorage = (obj) => {
    localStorage.setItem("ObjectTask", JSON.stringify(obj));
  };
  //
  const tasksSlope = () => {
    let ctr = 0;
    tasks.map((task) => {
      if (!task.completed) {
        ctr++;
      }
    });
    document.title = ctr === 0 ? "Tareas Moppy" : `(${ctr}) Tareas Moppy`;
    return ctr;
  };
  const tasksFilled = () => {
    let ctr = 0;
    tasks.map((task) => {
      if (task.completed) {
        ctr++;
      }
    });
    return ctr;
  };
  
  const changeFond = (idFont) => {
    switch (idFont) {
      case "fond-1":
        setFond(<EfectoHero></EfectoHero>);
        break;
      case "fond-2":
        setFond(<EfectCuar></EfectCuar>);
        break;
      case "fond-3":
        setFond(<EfectFlower></EfectFlower>);
        break;
      case "fond-4":
        setFond(<EfectoFlow2></EfectoFlow2>);
        break;
      default:
        setFond(<EfectoHero></EfectoHero>);
    }
    localStorage.setItem("fondAplication", JSON.stringify(idFont));
  };
  return (
    <div className="container_aplication">
      {fond}
      <Fonds changeFond={changeFond}></Fonds>
      <div className="container_principal">
        <div className="container_tasks">
          <div className="container_title_tasks">
            <span className="text_title">Tus Tareas</span>
            <div className="container_state_tasks">
              <div className="container_state_filled">
                Completadas: {tasksFilled()}
              </div>
              <div className="container_state_slope">
                Pendientes: {tasksSlope()}
              </div>
            </div>
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
                editTask={editTask}
              />
            ))}
          </div>
        </div>
        <div className="container_form_tasks">
          <TaskForm onSubmit={addTask}></TaskForm>
        </div>
      </div>
      <div className="container_text_version">Versión 1.5</div>
    </div>
  );
}

export default App;
