import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employess-list.css';

const EmployeesItem = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return(
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })
     
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesItem;