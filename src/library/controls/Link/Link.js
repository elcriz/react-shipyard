import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Link = ({
    children,
    to,
    title,
    ...props
}) => (
    <a
        {...props}
        className={classnames('link')}
        href={to || '#'}
        title={title}
    >
        {children}
    </a>
);

Link.propTypes = {
    /**
     * Button content.
     */
    children: PropTypes.node.isRequired,

    /**
     * URL (`href` value).
     */
    to: PropTypes.string,

    /**
     * Button title.
     */
    title: PropTypes.string,
};

export default Link;
