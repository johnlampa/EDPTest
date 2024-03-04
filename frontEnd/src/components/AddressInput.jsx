import { useState} from 'react'
import InputBox from "./UI/InputBox"

function AddressInput() {
    const [address, setAddress] = useState({
        houseNumber: "",
        street: "",
        barangay: "",
        city: "",
        province: "",
        country: "",
        zipcode: ""
    });

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setAddress((prevAddress) => {
            const updatedAddress = { ...prevAddress, [field]: value };
            console.log(updatedAddress); // Log the updated address immediately
            return updatedAddress;
        });
    };

    return (
        <div className="flex left-align">
            <p>2. Address Details</p>
            <div>
                <p>(House No.)</p>
                <InputBox label="Ex. B10, L5" value={address.houseNumber} onChange={(e) => handleInputChange(e, 'houseNumber')}></InputBox>
            </div>
            <div>
                <p>(Street)</p>
                <InputBox label="Ex. Aguila St." value={address.street} onChange={(e) => handleInputChange(e, 'street')}></InputBox>
            </div>
            <div>
                <p>(Barangay)</p>
                <InputBox label="Ex. Tibungco" value={address.barangay} onChange={(e) => handleInputChange(e, 'barangay')}></InputBox>
            </div>
            <div>
                <p>(City)</p>
                <InputBox label="Ex. Davao City" value={address.city} onChange={(e) => handleInputChange(e, 'city')}></InputBox>
            </div>
            <div>
                <p>(Province)</p>
                <InputBox label="Ex. Davao del Sur" value={address.province} onChange={(e) => handleInputChange(e, 'province')}></InputBox>
            </div>
            <div>
                <p>(Country)</p>
                <InputBox label="Ex. Philippines" value={address.country} onChange={(e) => handleInputChange(e, 'country')}></InputBox>
            </div>
            <div>
                <p>(Zip Code)</p>
                <InputBox label="Ex. 8000" value={address.zipcode} onChange={(e) => handleInputChange(e, 'zipcode')}></InputBox>
            </div>
        </div>
    )
}

export default AddressInput