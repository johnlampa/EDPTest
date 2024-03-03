import InputBox from "./UI/InputBox"

function AddressInput() {
    return (
        <div className="flex left-align">
            <p>2. Address Details</p>
            <div>
                <p>(House No.)</p>
                <InputBox label="Ex. B10, L5"></InputBox>
            </div>
            <div>
                <p>(Street)</p>
                <InputBox label="Ex. Aguila St."></InputBox>
            </div>
            <div>
                <p>(Barangay)</p>
                <InputBox label="Ex. Tibungco"></InputBox>
            </div>
            <div>
                <p>(City)</p>
                <InputBox label="Ex. Davao City"></InputBox>
            </div>
            <div>
                <p>(Province)</p>
                <InputBox label="Ex. Davao del Sur"></InputBox>
            </div>
            <div>
                <p>(Country)</p>
                <InputBox label="Ex. Philippines"></InputBox>
            </div>
            <div>
                <p>(Zip Code)</p>
                <InputBox label="Ex. 8000"></InputBox>
            </div>
        </div>
    )
}

export default AddressInput