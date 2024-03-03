import PersonalInput from "./PersonalInput";
import AddressInput from './AddressDetails.jsx';
import WorkInput from './WorkDetails.jsx';

function AddEmployee() {
    return (
        <div className="add-employee-container">
            <PersonalInput></PersonalInput>
            <AddressInput></AddressInput>
            <WorkInput></WorkInput>
        </div>
    )
}

export default AddEmployee;