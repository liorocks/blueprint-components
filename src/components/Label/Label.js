import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Label = ({
  children,
  className,
  disabled,
  inline,
  text,
  muted,
  ...rest
}) => {
  return (
    <label
      className={classnames(
        'pt-label',
        { 'pt-disabled': disabled },
        { 'pt-inline': inline },
        className
      )}
      {...rest}
    >
      {text}
      {muted && <span className="pt-text-muted">{muted}</span>}
      {children}
    </label>
  );
};

/**
 * Label property types.
 */
Label.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Additional CSS classes.
   */
  className: PropTypes.string,

  /**
   * Adds appereance of `disabled` style.
   */
  disabled: PropTypes.bool,

  /**
   * Align label and children elements on same line.
   */
  inline: PropTypes.bool,

  /**
   * Text to be displayed in label.
   */
  text: PropTypes.string,

  /**
   * Adds extra information to label.
   */
  muted: PropTypes.string,
};

/**
 * Label default properties.
 */
Label.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  inline: false,
  text: '',
  muted: '',
};

export default Label;
