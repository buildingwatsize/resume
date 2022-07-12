import HoverTooltips from 'components/Tooltips/HoverTooltips'
import PropTypes from 'prop-types'

const BoxStack = ({ title, list }) => {
  return (
    <div className='m-2 bg-medium-blue/20 shadow-md border-2 border-lighter-blue rounded-md w-max flex-grow last:flex-grow-0'>
      <div className='flex justify-center'>
        <div className='rounded-b-md bg-lighter-blue w-min px-2 text-dark-blue font-bold whitespace-nowrap'>{title}</div>
      </div>
      <div className='flex flex-wrap justify-evenly gap-4 p-4 pt-2'>
        {
          list.map(el => (
            <HoverTooltips key={el.key} text={el.key}>
              <div key={el.key} className='w-12'>
                {el.icon}
              </div>
            </HoverTooltips>
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
