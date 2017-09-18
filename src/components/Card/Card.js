import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Card = ({ children, elevation, interactive, className, ...rest }) => {
  return (
    <div
      className={classnames(
        'pt-card',
        { 'pt-interactive': interactive },
        { [`pt-elevation-${elevation}`]: elevation >= 0 && elevation <= 4 },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * Card property types.
 */
Card.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Additional CSS classes.
   */
  className: PropTypes.string,

  /**
   * Elevation level. Shadow simulation. Coud be from **0** to **4**.
   */
  elevation: PropTypes.number,

  /**
   * Visual intent color.
   */
  interactive: PropTypes.bool,
};

/**
 * Card default properties.
 */
Card.defaultProps = {
  children: null,
  className: '',
  elevation: -1,
  interactive: false,
};

export default Card;
