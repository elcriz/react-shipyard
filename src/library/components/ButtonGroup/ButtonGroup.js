import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonGroup = ({
    className,
    alignButtons,
    children,
    ...props
}) => (
    <div
        {...props}
        className={classnames(className, 'button-group', {
            'button-group--aligned-to-end': alignButtons === 'end',
            'button-group--aligned-to-start': alignButtons === 'start',
            'button-group--aligned-centered': alignButtons === 'center',
            'button-group--aligned-justified': alignButtons === 'justify',
        })}
    >
        {children}
    </div>
);

ButtonGroup.propTypes = {

    /**
     * ButtonGroup class name.
     */
    className: PropTypes.string,

    /**
     * ButtonGroup alignment.
     */
    alignButtons: PropTypes.oneOf(['end', 'start', 'center', 'justify']),

    /**
     * ButtonGroup group content.
     */
    children: PropTypes.node.isRequired
};

ButtonGroup.defaultProps = {
    alignButtons: 'center'
};

export default ButtonGroup;
