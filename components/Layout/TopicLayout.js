import PropTypes from 'prop-types'

const TopicLayout = ({ children, title, id }) => {
  return <div id={id} className="mb-4 pb-4 last:pb-0">
    <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-danger sticky top-[4.5rem] z-20 inline-block mt-4 mb-8">
      <span className="relative text-xl font-bold text-white">{title}</span>
    </span>
    <div className="text-md font-normal text-white/80 my-2 flex flex-wrap justify-center">
      {children}
    </div>
  </div>
}

TopicLayout.defaultProps = {
  children: null,
  title: "",
  id: "",
}

TopicLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  id: PropTypes.string,
}

export default TopicLayout