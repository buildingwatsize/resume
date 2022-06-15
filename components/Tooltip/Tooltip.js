import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { ClassCombiner } from 'utils/';

import MiniIcon from 'components/Button/MiniIcon';

const Tooltip = ({ children, className, ...rest }) => {
  const [isShow, setIsShow] = useState(false)
  const btnRef = useRef()

  const handleClickButton = () => setIsShow(!isShow)
  const handleClickOutside = e => {
    if (!btnRef.current?.contains(e.target)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div
      ref={btnRef}
      onClick={handleClickButton}
      className={`select-none relative -top-2 -right-2`}
    >
      <MiniIcon
        icon="information"
        className={ClassCombiner("text-white/50 hover:text-white transition-colors", className)}
        {...rest}
      />
      <div className={`absolute top-8 right-4 max-w-xs transition-opacity bg-bold-blue text-white p-5 break-words rounded-lg z-50 ${isShow ? "visible" : "invisible"}`}>
        {children}
      </div>

    </div>
  )
}

Tooltip.defaultProps = {
  children: null,
  className: "",
}

Tooltip.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Tooltip