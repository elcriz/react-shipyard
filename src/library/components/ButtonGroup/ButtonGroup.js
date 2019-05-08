import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ButtonGroup = ({
    alignButtons,
    children,
    ...props
}) => (
    <div
        {...props}
        className={classnames('button-group', {
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
     * Button alignment.
     */
    alignButtons: PropTypes.oneOf(['end', 'start', 'center', 'justify']),

    /**
     * Button group content.
     */
    children: PropTypes.node.isRequired
};

ButtonGroup.defaultProps = {
    alignButtons: 'center'
};

export default ButtonGroup;
