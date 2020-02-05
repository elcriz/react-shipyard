import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Dialog = ({
    className,
    variant,
    children,
    ...props
}) => (
    <div
        {...props}
        className={classnames(className, 'dialog', {
            'dialog--success': variant === 'success',
            'dialog--warning': variant === 'warning',
            'dialog--error': variant === 'error',
        })}
    >
        {variant && (
            <svg
                className="dialog__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
            >
                {variant === 'success' && (
                    <path d="M16,32 C7.2,32 0,24.8 0,16 C0,7.2 7.2,0 16,0 C24.8,0 32,7.2 32,16 C32,24.8 24.8,32 16,32 Z M14.9,21.4 C15,21.4 17.8,18.7 23.4,13.3 C24.2,12.5 24.2,11.3 23.4,10.5 C22.6,9.8 21.4,9.8 20.6,10.5 L13.5,17.4 L11.4,15.3 C10.6,14.6 9.4,14.6 8.6,15.3 C7.8,16.1 7.8,17.3 8.6,18.1 L12.1,21.4 C12.9,22.2 14.2,22.2 14.9,21.4 Z" />
                )}
                {variant === 'warning' && (
                    <path d="M16,0 C24.8,0 32,7.2 32,16 C32,24.8 24.8,32 16,32 C7.2,32 0,24.8 0,16 C0,7.2 7.2,0 16,0 Z M16,21 C14.9,21 14,21.9 14,23 C14,24.1 14.9,25 16,25 C17.1,25 18,24.1 18,23 C18,21.9 17.1,21 16,21 Z M16,19 C16.7,19 17.2257168,18.5 17.3,17.9 L18.8,10.4 C18.8,10.2 18.8,10 18.8,9.8 C18.8,8.3 17.6,7 16,7 C15.8,7 15.6,7 15.5,7 C13.9,7.3 12.9,8.8 13.2,10.4 L14.7,17.9 C14.8,18.5 15.4,19 16,19 Z" />
                )}
                {variant === 'error' && (
                    <path d="M18.7,16 L21.4,13.3 C22.2,12.5 22.2,11.3 21.4,10.6 C20.7,9.8 19.5,9.8 18.7,10.6 L16,13.3 L13.3,10.6 C12.5,9.8 11.3,9.8 10.6,10.6 C9.8,11.3 9.8,12.5 10.6,13.3 L13.3,16 L10.6,18.7 C9.8,19.5 9.8,20.7 10.6,21.4 C11.3,22.2 12.5,22.2 13.3,21.4 L16,18.7 L18.7,21.4 C19.5,22.2 20.7,22.2 21.4,21.4 C22.2,20.7 22.2,19.5 21.4,18.7 L18.7,16 Z M16,32 C7.2,32 0,24.8 0,16 C0,7.2 7.2,0 16,0 C24.8,0 32,7.2 32,16 C32,24.8 24.8,32 16,32 Z" />
                )}
            </svg>
        )}
        <div className="dialog__main">
            {children}
        </div>
    </div>
);

Dialog.propTypes = {

    /**
     * Dialog class name.
     */
    className: PropTypes.string,

    /**
     * Dialog variant. If one of these is set, an appropriate icon will be displayed inside the dialog as well.
     */
    variant: PropTypes.oneOf(['success', 'warning', 'error']),

    /**
     * Dialog content.
     */
    children: PropTypes.node.isRequired
};

export default Dialog;
