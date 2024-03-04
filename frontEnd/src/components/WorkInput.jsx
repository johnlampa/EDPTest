import React, { useState } from 'react';

function WorkInput() {
    const [selectedEmployeeType, setSelectedEmployeeType] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const handleSelectChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'employeeType':
                setSelectedEmployeeType(value);
                break;
            case 'status':
                setSelectedStatus(value);
                break;
            case 'department':
                setSelectedDepartment(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        console.log('Employee Type:', selectedEmployeeType);
        console.log('Status:', selectedStatus);
        console.log('Department:', selectedDepartment);
        // You can perform any further actions with the selected values here
    };

    return (
        <div className="flex left-align">
            <p>3. Work Details</p>
            <div>
                <p>(Employee Type)</p>
                <select id="employeeType" onChange={handleSelectChange}>
                    <option value="0">Choose</option>
                    <option value="1">Regular</option>
                    <option value="2">Part Time</option>
                    <option value="3">Probation</option>
                </select>
            </div>
            <div>
                <p>(Status)</p>
                <select id="status" onChange={handleSelectChange}>
                    <option value="0">Choose</option>
                    <option value="1">Active</option>
                    <option value="2">Resigned</option>
                    <option value="3">Absent without Leave</option>
                </select>
            </div>
            <div>
                <p>(Department)</p>
                <select id="department" onChange={handleSelectChange}>
                    <option value="0">Choose</option>
                    <option value="1">Administration</option>
                    <option value="2">HR</option>
                    <option value="3">Marketing</option>
                    <option value="4">Accounting</option>
                    <option value="5">IT</option>
                </select>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default WorkInput;
