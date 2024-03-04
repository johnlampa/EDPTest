
import PropTypes from 'prop-types';
import { useState } from 'react';
import EditPersonalInput from "./EditPersonalInput.jsx";
import EditAddressInput from './EditAddressInput.jsx';
import WorkInput from './WorkInput.jsx';
import DefaultButton from "./UI/DefaultButton.jsx";

function EditEmployee({ editEmployeeVisibility, setEditEmployeeVisibility, setEmployees, employees}) {
    const employee = employees[editEmployeeVisibility.index] //stores the employee object. but it should be passed to the individual input boxes

    const [personal, setPersonal] = useState({
        employeeNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
        contactInformation: ""
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
    const [selectedDesignation, setSelectedDesignation] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const handleCancel = () => {
        setEditEmployeeVisibility({visibility: false, index: -1});
    }

    const handleAddEmployee = () => {
        console.log("Personal Object:", personal); // Display personal object to the console
        console.log("Address Object:", address);
        const work = {
            employeeType: selectedEmployeeType,
            designationName: selectedDesignation,
            departmentName: selectedDepartment
        }
        console.log("Work Object:", work)

        const employee = {
            ...personal,
            ...address,
            ...work
        };

        setEmployees(prevEmployees => [...prevEmployees, employee]);
        setEditEmployeeVisibility({visibility: false, index: -1});
    }

    return (
        <div>
            <div className="add-employee-container">
                <h1>Edit Employee</h1>
                <EditPersonalInput onPersonalChange={setPersonal} employee={employee}/>
                <EditAddressInput onAddressChange={setAddress} employee={employee}/>
                <WorkInput onTypeChange={setSelectedEmployeeType} onDesignationChange={setSelectedDesignation} onDepartmentChange={setSelectedDepartment}/>
                <div onClick={handleAddEmployee}>
                    <DefaultButton label="Done"></DefaultButton>
                </div>
                <div onClick={handleCancel}>
                    <DefaultButton label="Cancel"></DefaultButton>
                </div>
            </div>
        </div>
    )
}

EditEmployee.propTypes = {
    setEditEmployeeVisibility: PropTypes.func.isRequired,
};

export default EditEmployee;
