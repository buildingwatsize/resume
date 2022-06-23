import PropTypes from 'prop-types'

const BoxStack = ({ title, list }) => {
  return (
    <div className='m-2 border-2 border-lighter-blue rounded-md w-max'>
      <div className='flex justify-center'>
        <div className='rounded-b-md bg-lighter-blue w-min px-2 text-dark-blue font-bold whitespace-nowrap'>{title}</div>
      </div>
      <div className='flex gap-2 p-4 pt-1'>
        {
          list.map(el => (
            // <HoverTooltips key={el.key} text={el.key}>
            <div key={el.key} className='w-[6vw]'>
              {el.icon}
            </div>
            // </HoverTooltips>
          ))
        }
      </div>
    </div>
  )
}

BoxStack.defaultProps = {
  title: "",
  list: [],
}

BoxStack.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    icon: PropTypes.any,
  })).isRequired,
}

export default BoxStack