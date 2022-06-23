import PropTypes from 'prop-types'

const HoverTooltips = ({ children, text }) => {
  return (
    <div className='relative flex flex-col items-center group'>
      <div className='group-hover:text-white'>{children}</div>
      <div className="hidden absolute bottom-0 flex-col items-center mb-7 w-max group-hover:flex group-hover:text-white">
        <span className="relative z-10 p-2 text-xs leading-none whitespace-no-wrap bg-medium-blue shadow-lg rounded-md">{text}</span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-medium-blue"></div>
      </div>
    </div>
  )
}

HoverTooltips.defaultProps = {
  children: null,
  text: "",
}

HoverTooltips.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
}

export default HoverTooltips