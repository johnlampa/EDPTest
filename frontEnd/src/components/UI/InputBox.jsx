import PropTypes from 'prop-types';

function InputBox({ label}) {
    return (
        <input placeholder={label}></input>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired
};

export default InputBox;