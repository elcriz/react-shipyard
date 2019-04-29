import React from 'react';
import PropTypes from 'prop-types';

export const Breadcrumb = ({
    children,
    ...props
}) => (
    <nav
        {...props}
        className="breadcrumb"
        aria-label="Breadcrumb"
    >
        {React.Children.map(children, (child) => {
            if (!child) {
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
     * Breadcrumb content.
     */
    children: PropTypes.node.isRequired
};

export default Breadcrumb;
