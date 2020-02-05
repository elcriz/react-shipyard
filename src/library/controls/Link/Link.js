import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Link = ({
    className,
    children,
    to,
    title,
    ...props
}) => (
    <a
        {...props}
        className={classnames(className, 'link')}
        href={to || '#'}
        title={title}
    >
        {children}
    </a>
);

Link.propTypes = {

    /**
     * CSS class name.
     */
    className: PropTypes.string,

    /**
     * URL (`href` value).
     */
    to: PropTypes.string,

    /**
     * Link title.
     */
    title: PropTypes.string,

    /**
     * Link content.
     */
    children: PropTypes.node.isRequired,
};

export default Link;
