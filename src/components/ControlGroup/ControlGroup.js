import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ControlGroup = ({ children, fill, vertical, className, ...rest }) => {
  return (
    <div
      className={classnames(
        'pt-control-group',
        { 'pt-fill': fill },
        { 'pt-vertical': vertical },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * ControlGroup property types.
 */
ControlGroup.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Additional CSS classes.
   */
  className: PropTypes.string,

  /**
   * Make all elements expand equally.
   */
  fill: PropTypes.bool,

  /**
   * Create a vertical control group.
   */
  vertical: PropTypes.bool,
};

/**
 * ControlGroup default properties.
 */
ControlGroup.defaultProps = {
  children: null,
  className: '',
  fill: false,
  vertical: false,
};

export default ControlGroup;
