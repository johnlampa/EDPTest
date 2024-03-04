import React, { useState } from 'react';

function WorkInput({ onTypeChange, onDesignationChange, onDepartmentChange }) {
    const handleSelectChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'employeeType':
                onTypeChange(value);
                break;
            case 'designation':
                onDesignationChange(value);
                break;
            case 'department':
                onDepartmentChange(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        console.log('Employee Type:', selectedEmployeeType);
        console.log('designation:', selectedDesignation);
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
                <p>(designation)</p>
                <select id="designation" onChange={handleSelectChange}>
                    <option value="0">Choose</option>
                    <option value="1">Manager</option>
                    <option value="2">Asst. Manager</option>
                    <option value="3">Staff</option>
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
        </div>
    );
}

export default WorkInput;
