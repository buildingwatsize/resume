
import HoverTooltips from 'components/Tooltips/HoverTooltips'
import PropTypes from 'prop-types'

const FeatureIcons = ({ list }) => {
  return (
    <div className='hidden md:flex justify-center gap-4 pt-2 absolute bottom-0 w-full'>
      {
        list.map(el => <HoverTooltips key={el.key} text={el.key}>
          {el.icon}
        </HoverTooltips>)
      }
    </div>
  )
}

FeatureIcons.defaultProps = {
  list: [],
}

FeatureIcons.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    icon: PropTypes.any,
  })),
}

export default FeatureIcons