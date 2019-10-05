import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Breadcrumb = ({
    className,
    children,
    ...props
}) => (
    <nav
        {...props}
        className={classnames(className, 'breadcrumb')}
        aria-label="Breadcrumb"
    >
        {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
                return null;
            }
            return React.cloneElement(child, {
                className: 'breadcrumb__link link--no-underline'
            });
        })}
    </nav>
);

Breadcrumb.propTypes = {

    /**
     * Breadcrumb class name.
     */
    className: PropTypes.string,

    /**
     * Breadcrumb content.
     */
    children: PropTypes.node.isRequired
};

export default Breadcrumb;
