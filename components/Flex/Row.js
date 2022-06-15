import PropTypes from 'prop-types';
import { ClassCombiner } from 'utils';

const GUTTER = "-mx-2 gap-y-4"
const Row = ({ className, children, ...rest }) => {
  return (
    <div
      className={ClassCombiner("flex flex-row flex-wrap", GUTTER, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

Row.defaultProps = {
  className: "",
  children: null,
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Row