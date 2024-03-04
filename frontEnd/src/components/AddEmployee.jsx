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

    const [address, setAddress] = useState({
        houseNumber: "",
        street: "",
        barangay: "",
        city: "",
        province: "",
        country: "",
        zipcode: ""
    });

    const [selectedEmployeeType, setSelectedEmployeeType] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const handleCancel = () => {
        setAddEmployeeVisibility(false);
    }

    const handleAddEmployee = () => {
        console.log("Personal Object:", personal); // Display personal object to the console
        console.log("Address Object:", address);
        const work = {
            employeeType: selectedEmployeeType,
            status: selectedStatus,
            department: selectedDepartment
        }
        console.log("Work Object:", work)
    }

    return (
        <div>
            <div className="add-employee-container">
                <PersonalInput onPersonalChange={setPersonal} />
                <AddressInput onAddressChange={setAddress}></AddressInput>
                <WorkInput onTypeChange={setSelectedEmployeeType} onStatusChange={setSelectedStatus} onDepartmentChange={setSelectedDepartment}></WorkInput>
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
