import PropTypes from 'prop-types';
import { ClassCombiner } from 'utils';

const Badge = ({ text, icon, className, ...rest }) => {
  return (
    <span
      className={ClassCombiner("bg-danger text-sm mr-2 px-2.5 py-0.5 rounded", className)}
    >
      {icon}
      {text}
    </span>
  )
}

Badge.defaultProps = {
  text: "",
  icon: "",
  className: "",
}

Badge.propTypes = {
  text: PropTypes.any,
  icon: PropTypes.any,
  className: PropTypes.string,
}

export default Badge