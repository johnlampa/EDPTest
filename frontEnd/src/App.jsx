/* eslint-disable no-unused-vars */
import { useEffect, useState} from 'react'
import EmployeeTable from './components/EmployeeTable.jsx';
import AddEmployee from './components/AddEmployee.jsx';

function App() {
  //source should be database
  const [employees, setEmployees] = useState([{
    employeeNumber: '320',
    firstName: 'j',
    middleName: 'k',
    lastName: 'rl',
    contactInformation: '0922',
    houseNumber: '318',
    street: 'aguila',
    barangay: 'mandug',
    city: 'davao city',
    province: 'davao del sur',
    country: 'philippines',
    zipcode: '8000',
    designationName: 'mngr',
    employeeType: 'regular',
    departmentName: 'hr',
  }, {
    employeeNumber: '320',
    firstName: 'a',
    middleName: 'd',
    lastName: 'gr',
    contactInformation: '0928',
    houseNumber: '318',
    street: 'quirino',
    barangay: 'idk',
    city: 'davao city',
    province: 'davao del sur',
    country: 'philippines',
    zipcode: '8000',
    designationName: 'mngr',
    employeeType: 'regular',
    departmentName: 'hr',
  }]);

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/department')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])

  const [addEmployeeVisibility, setAddEmployeeVisibility] = useState(false);

  return(
    <>
      <div style = {{padding: "100px"}}>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key ={i}>
                <td>{d.department_ID}</td>
                <td>{d.departmentName}</td>
                <td>{d.status}</td>
              </tr>
            ) )}
          </tbody>
        </table>
      </div>
      <div className='default-container'>
        <div className='table-button-container'>
          <EmployeeTable employees={employees} setEmployees={setEmployees} addEmployeeVisibility={addEmployeeVisibility} setAddEmployeeVisibility={setAddEmployeeVisibility}/>
        </div>
        <div className='default-container'>
          {addEmployeeVisibility && <AddEmployee setAddEmployeeVisibility={setAddEmployeeVisibility} setEmployees={setEmployees}></AddEmployee>}
        </div>
      </div>
      
      
    </>
    
  )
}

export default App