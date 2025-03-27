import { useRef, useState } from 'react'
import './App.css'
import { Input, ButtonAdd, Task } from './components'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  interface ITask{
    id: number;
    task: string;
    isMarked?: boolean;
    taskClass?: string;
  }
  const [task, setTask] = useState<string>('')
  // const [tareas, setTareas] = useState<ITask[]>([]);
  const [tareas, setTareas] = useState<ITask[]>(() => {
    const savedTasks : string | null = localStorage.getItem('tareas');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask: string = task.trim()
    if (newTask.length === 0) return
    const newTaskObject: ITask = { id: Date.now(), task: newTask, isMarked: false, taskClass: '' };
    setTareas([...tareas, newTaskObject]);
    localStorage.setItem('tareas', JSON.stringify([...tareas, newTaskObject]));

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
    localStorage.setItem('tareas', JSON.stringify(newTasks));
  }
  function handleMarkTask(index: number){
    const newTasks: ITask[] = tareas.map((task, i) => {
      if(i === index){
        return {...task, isMarked: !task.isMarked, taskClass: task.isMarked ? '' : 'marked'}
      }
      return task;
    })
    setTareas(newTasks);
    localStorage.setItem('tareas', JSON.stringify(newTasks));
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
                    <Task key={task.id} task={task.task} parentMethod={() => handleDeleteTask(index)} checkTask={() => {handleMarkTask(index)}} taskClass={task.taskClass} isCheck={task.isMarked}></Task>
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
