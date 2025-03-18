import './Input.css'
interface IInput{
    id:string;
    name:string;
    value:string;
    ref : React.Ref<HTMLInputElement>
    parentMethod : (e : React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({id,name,value,ref,parentMethod}:IInput) => {
    return(
        <input type="text" id={id} value={value} ref={ref} className="deep-shadow-input" onChange={parentMethod}  name={name} placeholder='Añadir nueva tarea...' />
    )
}