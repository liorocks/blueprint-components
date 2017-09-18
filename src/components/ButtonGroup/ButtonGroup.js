import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonGroup = ({
  children,
  align,
  large,
  minimal,
  fill,
  vertical,
  className,
  ...rest
}) => {
  return (
    <div
      className={classnames(
        'pt-button-group',
        { 'pt-large': large },
        { 'pt-align-left': align === 'left' },
        { 'pt-minimal': minimal },
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
 * ButtonGroup property types.
 */
ButtonGroup.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Additional CSS classes.
   */
  className: PropTypes.string,

  /**
   * Align text and icons to left in vertical mode. 
   */
  align: PropTypes.string,

  /**
   * Use large buttons.
   */
  large: PropTypes.bool,

  /**
   * Use minimal buttons.
   */
  minimal: PropTypes.bool,

  /**
   * Make all buttons expand equally.
   */
  fill: PropTypes.bool,

  /**
   * Create a vertical button group.
   */
  vertical: PropTypes.bool,
};

/**
 * ButtonGroup default properties.
 */
ButtonGroup.defaultProps = {
  children: null,
  className: '',
  align: '',
  large: false,
  minimal: false,
  fill: false,
  vertical: false,
};

export default ButtonGroup;
