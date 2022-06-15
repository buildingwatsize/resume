import PropTypes from 'prop-types';
import { ClassCombiner } from 'utils';

import IconInformation from 'assets/icons/information_circle';

const MiniIcon = ({ icon, onClick, className, ...rest }) => {
  let iconElem = IconInformation
  if (icon !== "information") {
    iconElem = ""
  }
  return (
    <span
      className={ClassCombiner("inline-flex items-center p-1 text-sm font-semibold rounded-full cursor-pointer", className)}
      onClick={onClick}
      {...rest}
    >
      {iconElem}
    </span>
  )
}

MiniIcon.defaultProps = {
  icon: "information",
  onClick: () => null,
  className: "",
}

MiniIcon.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default MiniIcon