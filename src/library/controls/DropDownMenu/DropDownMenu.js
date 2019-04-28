import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const DropDownMenu = ({
    options,
    size,
    maxWidth,
    isValid,
    isDisabled,
    ...props
}) => (
    <div
        {...props}
        className={classnames('drop-down-menu', {
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
    })).isRequired
};

DropDownMenu.defaultProps = {
    size: undefined,
    maxWidth: undefined,
    isValid: undefined,
    isDisabled: false
};

export default DropDownMenu;
