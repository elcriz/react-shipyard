import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const TextInput = ({
    value,
    placeholder,
    onChange,
    isValid,
    isDisabled,
    isMultiline,
    ...props
}) => {
    const [currentValue, setValue] = useState(value || '');

    const handleChange = (newValue) => {
        if (onChange) {
            onChange(newValue);
        }
        setValue(newValue);
    };

    return (
        <React.Fragment>
            {isMultiline && (
                <textarea
                    {...props}
                    className={classnames('text-input', {
                        'text-input--multiline': true,
                        'is-valid': isValid !== undefined && isValid !== false,
                        'is-invalid': isValid !== undefined && !isValid,
                    })}
                    disabled={isDisabled}
                    placeholder={placeholder}
                    value={currentValue}
                    onChange={(event) => {
                        handleChange(event.target.value);
                    }}
                />
            )}
            {!isMultiline && (
                <input
                    {...props}
                    className={classnames('text-input', {
                        'is-valid': isValid !== undefined && isValid !== false,
                        'is-invalid': isValid !== undefined && !isValid,
                    })}
                    disabled={isDisabled}
                    placeholder={placeholder}
                    type="text"
                    value={currentValue}
                    onChange={(event) => {
                        handleChange(event.target.value);
                    }}
                />
            )}
        </React.Fragment>
    );
};

TextInput.propTypes = {

    /**
     * The (default) value.
     */
    value: PropTypes.string,

    /**
     * A placeholder text.
     */
    placeholder: PropTypes.string,

    /**
     * Gets called when thge value changes.
     * @param {string} value
     */
    onChange: PropTypes.func,

    /**
     * Is the text input valid or not.
     */
    isValid: PropTypes.bool,

    /**
     * Disable the text input.
     */
    isDisabled: PropTypes.bool,

    /**
     * Enable multine mode.
     */
    isMultiline: PropTypes.bool
};

TextInput.defaultProps = {
    value: '',
    placeholder: undefined,
    isValid: undefined,
    isDisabled: false,
    isMultiline: false,
};

export default TextInput;
