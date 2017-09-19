import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { intentStyles } from '../../utils';

const FormGroup = ({
  children,
  className,
  disabled,
  intent,
  inline,
  large,
  label,
  helper,
  ...rest
}) => {
  return (
    <div
      className={classnames(
        'pt-form-group',
        { 'pt-inline': inline },
        { 'pt-disabled': disabled },
        { 'pt-large': large },
        intentStyles(intent),
        className
      )}
      {...rest}
    >
      {label}
      {(children || helper) && (
          <div className="pt-form-content">
            {children}
            {helper && <div className="pt-form-helper-text">{helper}</div>}
          </div>
        )}
    </div>
  );
};

/**
 * FormGroup property types.
 */
FormGroup.propTypes = {
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
   * Visual intent color.
   */
  intent: PropTypes.number,

  /**
   * Align label and children elements on same line.
   */
  inline: PropTypes.bool,

  /**
   * Use large elements.
   */
  large: PropTypes.bool,

  /**
   * Use `Label` component.
   */
  label: PropTypes.node,

  /**
   * Helper text.
   */
  helper: PropTypes.string,
};

/**
 * FormGroup default properties.
 */
FormGroup.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  intent: -1,
  inline: false,
  large: false,
  label: null,
  helper: '',
};

export default FormGroup;
