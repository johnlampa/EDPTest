import PropTypes from 'prop-types'
import PersonalInput from "./PersonalInput";
import AddressInput from './AddressInput.jsx';
import WorkInput from './WorkInput.jsx';
import DefaultButton from "./UI/DefaultButton.jsx";

function AddEmployee({setAddEmployeeVisibility}) {
    const handleCancel = () => {
        setAddEmployeeVisibility(false)
    }
    return (
        <div>
            <div className="add-employee-container">
                <PersonalInput></PersonalInput>
                <AddressInput></AddressInput>
                <WorkInput></WorkInput>
                <DefaultButton label="Add Employee"></DefaultButton>
                <div onClick={handleCancel}>
                    <DefaultButton label="Cancel"></DefaultButton>
                </div>
                
            </div>
            
        </div>
        
    )
}

AddEmployee.propTypes = {
    setAddEmployeeVisibility: PropTypes.func.isRequired, 
};

export default AddEmployee;