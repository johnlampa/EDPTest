import InputBox from "./UI/InputBox"
import { useState} from 'react'

function PersonalInput() {
    const [personal, setPersonal] = useState({
        employeeNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
        contactNumber: ""
    });

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setPersonal(prevPersonal => ({
            ...prevPersonal,
            [field]: value
        }));

        console.log(personal); // Display current personal object
    };

    return (
        <div className="flex left-align">
            <p>1. Personal Details</p>
            <div>
                <p>(Employee Number)</p>
                <InputBox label="Ex. 256" value={personal.employeeNumber} onChange={(e) => handleInputChange(e, 'employeeNumber')} />
            </div>
            <div>
                <p>(First Name)</p>
                <InputBox label="Ex. Agustine" value={personal.firstName} onChange={(e) => handleInputChange(e, 'firstName')} />
            </div>
            <div>
                <p>(Middle Name)</p>
                <InputBox label="Ex. Loayon" value={personal.middleName} onChange={(e) => handleInputChange(e, 'middleName')} />
            </div>
            <div>
                <p>(Last Name)</p>
                <InputBox label="Ex. Salcedo" value={personal.lastName} onChange={(e) => handleInputChange(e, 'lastName')} />
            </div>
            <div>
                <p>(Contact Number)</p>
                <InputBox label="Ex. 09228735874" value={personal.contactNumber} onChange={(e) => handleInputChange(e, 'contactNumber')} />
            </div>
        </div>
    )
}

export default PersonalInput;
