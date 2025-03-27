import IconTrash from '../../assets/trashTask.svg'
import './Task.css'

interface ITask{
    task:string;
    taskClass?: string;
    isCheck?: boolean;
    parentMethod: () => void;
    checkTask: () => void;
}
export const Task = ({task,parentMethod,checkTask,taskClass,isCheck} : ITask) => {

    return (
        <>
            <section className="todo_section__task_item">
                <div className="todo_section__task_info">
                    <input type="checkbox" name="" id="" checked={isCheck} onChange={checkTask} />
                    <label className={taskClass}>{task}</label>
                </div>
                <button className="todo_section__task_button" onClick={parentMethod} type="button">
                    <img src={IconTrash} alt="Eliminar" />
                </button>
            </section>
        </>
    )
}