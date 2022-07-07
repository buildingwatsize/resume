import PropTypes from 'prop-types'

const Title = ({ title, abbr, timestamp }) => {
  return (
    <div className="m-2 text-center">
      <div className="font-bold text-lightest-blue">{title}</div>
      <div className="text-white/60">({abbr})</div>
      <div className="text-sm text-white/40 leading-10">Test Taken: {timestamp}</div>
    </div>
  )
}

Title.defaultProps = {
  title: "",
  abbr: "",
  timestamp: "",
}

Title.propTypes = {
  title: PropTypes.string,
  abbr: PropTypes.string,
  timestamp: PropTypes.string,
}

export default Title