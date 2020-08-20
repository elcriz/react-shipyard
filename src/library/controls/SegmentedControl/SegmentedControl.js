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
const SegmentedControl = ({
	id,
    className,
    label,
    options,
    value,
    onChange,
    isSmall,
    isInline,
    ...props
}) => {
	const isMultiSelect = value && Array.isArray(value);
	const [currentValue, setValue] = useState(value
		|| (isMultiSelect ? [] : '')
	);

    const handleChange = (newValue, isChecked) => {
		if (!isMultiSelect) {
			setValue(newValue);
			return;
		}
		setValue(oldValues => ([
			...oldValues.filter(foundValue => foundValue !== newValue),
			newValue
		].filter(foundValue => isChecked
			? foundValue !== newValue : true
		)));
	};

	React.useEffect(() => {
		if (onChange) {
			onChange(currentValue);
		}
	}, [currentValue, onChange]);

    return (
        <div
            {...props}
            className={classnames(className, 'segmented-control', {
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
					const optionId = `${id}-${index}`;
                    const serializedOptionValue = typeof optionValue === 'object' ? Object.keys(optionValue)[0] : optionValue;
					const inputLabel = typeof optionValue === 'object' ? optionValue[Object.keys(optionValue)] : optionValue;
					const checked = isMultiSelect
						? (currentValue.indexOf(serializedOptionValue) !== -1)
						: (currentValue === serializedOptionValue);

                    return (
                        <label
                            key={index}
							className={`segmented-control__item${value === serializedOptionValue ? ' is-selected' : ''}`}
							htmlFor={optionId}
                        >
                            <input
								id={optionId}
								className="segmented-control__input"
								name={id}
                                value={serializedOptionValue}
                                checked={checked}
                                type={isMultiSelect ? 'checkbox' : 'radio'}
                                onChange={(event) => {
                                    handleChange(event.target.value, checked);
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
     * SegmentedControl element id.
     */
    id: PropTypes.string.isRequired,

    /**
     * SegmentedControl class name.
     */
    className: PropTypes.string,

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
	 * Either `'Value 1'` or `['Value 1', 'Value 2']` or `undefined`
     */
    value: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.arrayOf(
			PropTypes.string
		)
	]),

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
