import { useRef, useState } from 'react'
import './App.css'
import { Input, ButtonAdd, Task } from './components'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  interface ITask{
    id: number;
    task: string;
  }
  const [task, setTask] = useState<string>('')
  const [tareas, setTareas] = useState<ITask[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask: string = task.trim()
    if (newTask.length === 0) return
    const newTaskObject: ITask = { id: Date.now(), task: newTask };
    setTareas([...tareas, newTaskObject]);

    setTask('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  const notify = () => toast("Tarea eliminada");

  function handleDeleteTask(index: number) {
    const newTasks: ITask[] = tareas.filter((_, i) => i !== index)
    setTareas(newTasks)
    notify();
  }

  return (
    <>
      <main>
        <h1>Lista de tareas</h1>
        <section className='todo_section'>
          <form className="todo_section__add" onSubmit={handleSubmit}>
            <Input id='input_task' name='newTask' value={task} ref={inputRef} parentMethod={(e) => setTask(e.target.value)} />
            <ButtonAdd id='btnAddTask' />
          </form>
          <section className='todo_section__task'>
            {
              tareas.length === 0 ? <p>No hay tareas. ¡Añade una!</p> :
                (
                  tareas.map((task, index) => (
                    <Task key={task.id} task={task.task} parentMethod={() => handleDeleteTask(index)}></Task>
                  ))
                )
            }
            <ToastContainer />
          </section>
        </section>
      </main>

    </>
  )
}

export default App
