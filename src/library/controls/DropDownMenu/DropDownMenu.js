import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const DropDownMenu = ({
    className,
    options,
    defaultValue,
    size,
    maxWidth,
    onChange,
    isValid,
    isDisabled,
    ...props
}) => (
    <div
        {...props}
        className={classnames(className, 'drop-down-menu', {
            'drop-down-menu--90': size === 90,
            'drop-down-menu--max-width-60': maxWidth === 60,
            'drop-down-menu--max-width-70': maxWidth === 70,
            'drop-down-menu--max-width-80': maxWidth === 80,
            'drop-down-menu--max-width-90': maxWidth === 90,
            'is-valid': isValid,
            'is-invalid': isValid === false
        })}
    >
        <select
            className="drop-down-menu__select"
            disabled={!!isDisabled}
            value={defaultValue}
            onChange={onChange}
        >
            {options && options.map(({ key, value }, optionIndex) => (
                <option
                    key={optionIndex}
                    className="drop-down-menu__option"
                    value={value}
                >
                    {key}
                </option>
            ))}
        </select>
    </div>
);

DropDownMenu.propTypes = {

    /**
     * Dropdown class name.
     */
    className: PropTypes.string,

    /**
     * Dropdown size.
     */
    size: PropTypes.oneOf([90]),

    /**
     * Dropdown maximum width.
     */
    maxWidth: PropTypes.oneOf([60, 70, 80, 90]),

    /**
     * Dropdown menu validity state.
     */
    isValid: PropTypes.bool,

    /**
     * Is the dropdown menu disabled or not.
     */
    isDisabled: PropTypes.bool,

    /**
     * Options.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
    })).isRequired,

    /**
     * Default value.
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Gets called when the user (re)selects an option.
     * @param {any} event The selected option value
     */
    onChange: PropTypes.func
};

DropDownMenu.defaultProps = {
    size: undefined,
    maxWidth: undefined,
    isValid: undefined,
    isDisabled: false
};

export default DropDownMenu;
