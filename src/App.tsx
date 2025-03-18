import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Input, ButtonAdd,Task } from './components'

function App() {
  const [task, setTask] = useState<string>('')
  const [tareas, setTareas] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask = task.trim()
    if(newTask.length === 0) return
    setTareas([...tareas, newTask]);
    setTask('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <main>
        <h1>Lista de tareas</h1>
        <section className='todo_section'>
          <form className="todo_section__add" onSubmit={ handleSubmit }>
            <Input id='input_task' name='newTask' value={task} ref={inputRef} parentMethod={(e) => setTask(e.target.value)}/>
            <ButtonAdd id='btnAddTask' />
          </form>
          <section className='todo_section__task'>
            {
              tareas.length === 0 ? <p>No hay tareas. ¡Añade una!</p> : 
              (
                tareas.map((task,index) => (
                  <Task key={index} task={task} classTask=''></Task>
                  // <li key={index}>{task}</li>
                ))
              )
            }
            
          </section>
        </section>
      </main>

    </>
  )
}

export default App
