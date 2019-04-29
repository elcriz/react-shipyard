import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a SegmentedControl component.
 * @todo Add focus/active state
 * @todo Check keyboard navigation
 * @param {object} - Component props
 * @return {Node}
 */
export const SegmentedControl = ({
    label,
    options,
    value,
    onChange,
    isSmall,
    isInline,
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
        <div
            {...props}
            className={classnames('segmented-control', {
                'segmented-control--inline': isInline,
                'segmented-control--small': isSmall,
            })}
        >
            {label && (
                <div className="segmented-control__label-box">
                    <label className="segmented-control__label">
                        {label}
                    </label>
                </div>
            )}
            <div className="segmented-control__items">
                {options.map((optionValue, index) => {
                    const serializedOptionValue = typeof optionValue === 'object' ? Object.keys(optionValue)[0] : optionValue;
                    const inputLabel = typeof optionValue === 'object' ? optionValue[Object.keys(optionValue)] : optionValue;

                    return (
                        <label
                            key={index}
                            className={`segmented-control__item${value === serializedOptionValue ? ' is-selected' : ''}`}
                        >
                            <input
                                className="segmented-control__input"
                                value={serializedOptionValue}
                                checked={currentValue === serializedOptionValue}
                                type="radio"
                                onChange={(event) => {
                                    handleChange(event.target.value);
                                }}
                            />
                            <span className="segmented-control__input-label">
                                {inputLabel}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

SegmentedControl.propTypes = {

    /**
     * SegmentedControl field label.
     */
    label: PropTypes.string,

    /**
     * Options.
     * Either `['Value 1', 'Value 2']` or `[{ 'key': 'value' }]`
     */
    options: PropTypes.arrayOf(
        PropTypes.oneOf([
            PropTypes.string,
            PropTypes.object
        ])
    ).isRequired,

    /**
     * Current value.
     */
    value: PropTypes.string,

    /**
     * Gets called when the user changes the value.
     * @param {any} event The selected value
     */
    onChange: PropTypes.func,

    /**
     * Display the segmented control in a smaller version.
     */
    isSmall: PropTypes.bool,

    /**
     * Should the segmented control be rendered inline (e.g. inside another form field) or not.
     */
    isInline: PropTypes.bool,
};

SegmentedControl.defaultProps = {
    isSmall: false,
    isInline: false
};

export default SegmentedControl;
