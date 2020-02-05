import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
    className,
    label,
    variant,
    size,
    isFull,
    isOutlined,
    isHovered,
    isFocused,
    isActive,
    isDisabled,
    onClick,
    ...props
}) => (
    <button
        {...props}
        className={classnames(className, 'button', {
            'button--call-to-action': variant === 'call-to-action',
            'button--primary': variant === 'primary',
            'button--secondary': variant === 'secondary',
            'button--60': size === 60,
            'button--70': size === 70,
            'button--80': size === 80,
            'button--90': size === 90,
            'button--200': size === 200,
            'button--full': isFull,
            'button--outline': isOutlined,
            'is-hovered': isHovered,
            'is-focused': isFocused,
            'is-active': isActive
        })}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
    >
        {label}
    </button>
);

Button.propTypes = {

    /**
     * Button class name.
     */
    className: PropTypes.string,

    /**
     * Button label.
     */
    label: PropTypes.string.isRequired,

    /**
     * Button variant.
     */
    variant: PropTypes.oneOf(['call-to-action', 'primary', 'secondary']),

    /**
     * Button (relative) size.
     */
    size: PropTypes.oneOf([60, 70, 80, 90, 200]),

    /**
     * Should the button be full width or not.
     */
    isFull: PropTypes.bool,

    /**
     * Should the button be outlined or not (available for all types).
     */
    isOutlined: PropTypes.bool,

    /**
     * Display the button as being hovered over.
     */
    isHovered: PropTypes.bool,

    /**
     * Display the button as being focused on.
     */
    isFocused: PropTypes.bool,

    /**
     * Display the button as being currently active.
     */
    isActive: PropTypes.bool,

    /**
     * Disable the button.
     */
    isDisabled: PropTypes.bool,

    /**
     * Gets called when the user clicks the button.
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
    onClick: PropTypes.func
};

Button.defaultProps = {
    isFull: false,
    isOutlined: false,
    isHovered: false,
    isFocused: false,
    isActive: false,
    isDisabled: false
};

export default Button;
