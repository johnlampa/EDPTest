import DefaultButton from "./DefaultButton"

function ButtonContainer() {
    return(
        <div>
            <DefaultButton label="Add New Employee"/>
            <DefaultButton label="Edit Employee"/>
            <DefaultButton label="Remove Employee"/>
        </div>
    )
}

export default ButtonContainer