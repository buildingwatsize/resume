import PropTypes from 'prop-types';
import React from 'react';
import { ClassCombiner } from 'utils';

import styles from './Button.module.css';

const Button = React.forwardRef(({ type, children, onClick, className, ...rest }, ref) => {
  return (
    <button
      className={ClassCombiner(styles.btnPushable, className)}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      <span className={styles.btnShadow} />
      <span className={styles.btnEdge} />
      <span className={type == "primary" ? styles.btnFrontPanel : styles.btnFrontPanelSecondary}>
        {children}
      </span>
    </button>
  )
})

Button.defaultProps = {
  type: "primary",
  children: null,
  onClick: () => null,
  className: "",
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Button