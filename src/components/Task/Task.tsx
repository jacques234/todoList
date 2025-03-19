import { useState } from 'react';
import IconTrash from '../../assets/trashTask.svg'
import './Task.css'

interface ITask{
    task:string;
    parentMethod: () => void;
}
export const Task = ({task,parentMethod} : ITask) => {
    const [taskClass, setTaskClass] = useState<string>('')
    function handleCheckTask(){
        if(taskClass === 'marked') setTaskClass('')
        else setTaskClass('marked')
    }


    return (
        <>
            <section className="todo_section__task_item">
                <div className="todo_section__task_info">
                    <input type="checkbox" name="" id="" onChange={handleCheckTask} />
                    <label className={taskClass}>{task}</label>
                </div>
                <button className="todo_section__task_button" onClick={parentMethod} type="button">
                    <img src={IconTrash} alt="Eliminar" />
                </button>
            </section>
        </>
    )
}