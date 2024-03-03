function WorkInput() {
    return (
        <div className="flex left-align">
            <p>3. Work Details</p>
            <div>
                <p>(Employee Type)</p>
                <select id="type">
                    <option value="1">Regular</option>
                    <option value="2">Part Time</option>
                    <option value="3">Probation</option>
                </select>
            </div>
            <div>
                <p>(Status)</p>
                <select id="status">
                    <option value="1">Active</option>
                    <option value="2">Resigned</option>
                    <option value="3">Absent without Leave</option>
                </select>
            </div>
            <div>
                <p>(Department)</p>
                <select id="department">
                    <option value="1">Administration</option>
                    <option value="2">HR</option>
                    <option value="3">Marketing</option>
                    <option value="4">Accounting</option>
                    <option value="5">IT</option>
                </select>
            </div>
        </div>
    )
}

export default WorkInput