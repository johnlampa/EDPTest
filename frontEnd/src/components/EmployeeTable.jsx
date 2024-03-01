function EmployeeTable() {
    return (
        <>
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
                <tr>
                    <th id="empty-list-label" colSpan={7} className="border-black border border-solid border-collapse" >No employees found</th>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default EmployeeTable