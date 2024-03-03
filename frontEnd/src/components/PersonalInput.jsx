import InputBox from "./UI/InputBox"

function PersonalInput() {
    return (
        <div className="flex left-align">
            <p>2. Personal Details</p>
            <div>
                <p>(First Name)</p>
                <InputBox label="Ex. Agustine"></InputBox>
            </div>
            <div>
                <p>(Middle Name)</p>
                <InputBox label="Ex. Loayon"></InputBox>
            </div>
            <div>
                <p>(Last Name)</p>
                <InputBox label="Ex. Salcedo"></InputBox>
            </div>
            <div>
                <p>(Contact Number)</p>
                <InputBox label="Ex. 09228735874"></InputBox>
            </div>
        </div>
    )
}

export default PersonalInput