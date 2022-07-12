import PropTypes from 'prop-types'

const Title = ({ title, abbr, timestamp }) => {
  return (
    <div className="m-2 min-w-[50%] px-2">
      <div className="font-bold text-lightest-blue xl:text-2xl">{title}</div>
      <div className="text-white/60 xl:text-2xl">({abbr})</div>
      <div className="text-sm text-white/40 py-4 xl:text-2xl">Test Taken: {timestamp}</div>
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