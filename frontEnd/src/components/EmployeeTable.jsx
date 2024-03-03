import PropTypes from 'prop-types';

function EmployeeTable({ employees }) {
    return (
        <table className="border-black border border-solid border-collapse">
            <thead>
                <tr>
                    <th className="border-black border border-solid border-collapse">Employee No.</th>
                    <th className="border-black border border-solid border-collapse">Name</th>
                    <th className="border-black border border-solid border-collapse">Address</th>
                    <th className="border-black border border-solid border-collapse">Designation</th>
                    <th className="border-black border border-solid border-collapse">Employee Type</th>
                    <th className="border-black border border-solid border-collapse">Status</th>
                    <th className="border-black border border-solid border-collapse">Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.length > 0 ? (
                    employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.employeeNo}</td>
                            <td>{employee.name}</td>
                            <td>{employee.address}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.employeeType}</td>
                            <td>{employee.status}</td>
                            <td>{employee.department}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td id="empty-list-label" colSpan={7} className="border-black border border-solid border-collapse" >No employees found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default EmployeeTable;
