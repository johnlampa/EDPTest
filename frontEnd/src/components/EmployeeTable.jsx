import PropTypes from 'prop-types';

function EmployeeTable({ employees, setEmployees }) {
    const handleDelete = (index) => {
        // Create a new array without the employee at the specified index
        const updatedEmployees = [...employees.slice(0, index), ...employees.slice(index + 1)];
        // Update the state with the new array of employees
        setEmployees(updatedEmployees);
    };

    return (
        <table className="border-black border border-solid border-collapse">
            <thead>
                <tr>
                    <th className="border-black border border-solid border-collapse">Employee No.</th>
                    <th className="border-black border border-solid border-collapse">Name</th>
                    <th className="border-black border border-solid border-collapse">Contact</th>
                    <th className="border-black border border-solid border-collapse">Address</th>
                    <th className="border-black border border-solid border-collapse">Designation</th>
                    <th className="border-black border border-solid border-collapse">Employee Type</th>
                    <th className="border-black border border-solid border-collapse">Status</th>
                    <th className="border-black border border-solid border-collapse">Department</th>
                    <th className="border-black border border-solid border-collapse">Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.length > 0 ? (
                    employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.employeeNo}</td>
                            <td>{employee.name}</td>
                            <td>{employee.contact}</td>
                            <td>{employee.address}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.employeeType}</td>
                            <td>{employee.status}</td>
                            <td>{employee.department}</td>
                            <td><button className='delete-button' onClick={() => handleDelete(index)}>Remove Employee</button></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td id="empty-list-label" colSpan={9} className="border-black border border-solid border-collapse" >No employees found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

EmployeeTable.propTypes = {
    employees: PropTypes.arrayOf(
        PropTypes.shape({
            employeeNo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            designation: PropTypes.string.isRequired,
            employeeType: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            department: PropTypes.string.isRequired,
        })
    ).isRequired,
    setEmployees: PropTypes.func.isRequired,
};

export default EmployeeTable;
