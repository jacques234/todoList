import { useState } from 'react';
import IconTrash from '../../assets/trashTask.svg'
import './Task.css'

interface ITask{
    task:string;
}
export const Task = ({task} : ITask) => {
    const [taskClass, setTaskClass] = useState<string>('')


    return (
        <>
            <section className="todo_section__task_item">
                <div className="todo_section__task_info">
                    <input type="checkbox" name="" id="" />
                    <label className={taskClass}>{task}</label>
                </div>
                <button className="todo_section__task_button" type="button">
                    <img src={IconTrash} alt="Eliminar" />
                </button>
            </section>
        </>
    )
}