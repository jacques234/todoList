import './ButtonAdd.css'
import IconAdd from '../../assets/addTask.svg'

interface IButtonAdd{
    id : string;
}
export const ButtonAdd = ({id} : IButtonAdd) =>{
    return(
        <button className="button-17" id={id} type='submit'><img src={IconAdd} alt="Icono de agregar" /> Agregar</button>
    )
}