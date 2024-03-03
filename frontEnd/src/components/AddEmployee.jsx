import EmployeeNum from "./EmpNumInput";
import PersonalInput from "./PersonalInput";

function AddEmployee() {
    return (
        <div className="add-employee-container">
            <EmployeeNum></EmployeeNum>
            <PersonalInput></PersonalInput>
        </div>
    )
}

export default AddEmployee;