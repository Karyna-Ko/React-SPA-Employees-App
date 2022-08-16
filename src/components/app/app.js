import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Олена Кравченко', salary: 800, increase: false, id:"1"},
        {name: 'Василь Науменко', salary: 1500, increase: true, id:"2"},
        {name: 'Демьян Василенко', salary: 3500, increase: false, id:"3"},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />

            <EmployeesAddForm/>
        </div>
    )
}


export default App;