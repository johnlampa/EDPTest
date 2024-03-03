import DefaultButton from "./UI/DefaultButton"

function ButtonContainer() {
    return(
        <div className="button-container">
            <DefaultButton label="Add New Employee"/>
            <DefaultButton label="Edit Employee"/>
        </div>
    )
}

export default ButtonContainer