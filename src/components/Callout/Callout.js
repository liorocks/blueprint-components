import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { intentStyles } from '../../utils';

const Callout = ({ children, intent, className, iconName, ...rest }) => {
  return (
    <div
      className={classnames(
        'pt-callout',
        intentStyles(intent),
        { [`pt-icon-${iconName}`]: iconName },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * Callout property types.
 */
Callout.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Additional CSS classes.
   */
  className: PropTypes.string,

  /**
   * Visual intent color.
   */
  intent: PropTypes.number,

  /**
   * Name for the icon. 
   * Note: `pt-icon` prefix is unnecessary. See [list of icons](http://blueprintjs.com/docs/#core/icons).
   */
  iconName: PropTypes.string,
};

/**
 * Callout default properties.
 */
Callout.defaultProps = {
  children: null,
  className: '',
  intent: -1,
  iconName: '',
};

export default Callout;
