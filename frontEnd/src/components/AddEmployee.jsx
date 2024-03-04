// addemployee.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import PersonalInput from "./PersonalInput";
import AddressInput from './AddressInput.jsx';
import WorkInput from './WorkInput.jsx';
import DefaultButton from "./UI/DefaultButton.jsx";

function AddEmployee({ setAddEmployeeVisibility }) {
    const [personal, setPersonal] = useState({
        employeeNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
        contactNumber: ""
    });

    const handleCancel = () => {
        setAddEmployeeVisibility(false);
    }

    const handleAddEmployee = () => {
        console.log("Personal Object:", personal); // Display personal object to the console
        // Add logic to process the personal object or send it to the server
    }

    return (
        <div>
            <div className="add-employee-container">
                <PersonalInput onPersonalChange={setPersonal} />
                <AddressInput></AddressInput>
                <WorkInput></WorkInput>
                <div onClick={handleAddEmployee}>
                    <DefaultButton label="Add Employee"></DefaultButton>
                </div>
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
