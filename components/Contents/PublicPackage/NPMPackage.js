import ClickAndGo from "components/Utils/ClickAndGo"
import PropTypes from 'prop-types'

const NPMPackage = ({ icon, title, description, link }) => {
  return (
    <>
      <ClickAndGo link={link}>
        <div className="bg-medium-blue/20 shadow-md cursor-pointer px-2 py-2 sm:px-6 sm:py-4 rounded-md hover:bg-light-blue/20 h-full flex">
          <div className="flex-shrink-0 w-12 m-4">{icon}</div>
          <div className="flex flex-col justify-center">
            <div className="text-white font-bold text-lg overflow-hidden text-ellipsis line-clamp-2">{title}</div>
            <div className="text-white/60 text-sm overflow-hidden text-ellipsis line-clamp-2">{description}</div>
          </div>
        </div>
      </ClickAndGo>
    </>
  )
}

NPMPackage.defaultProps = {
  icon: "",
  title: "",
  description: "",
  link: "#",
}

NPMPackage.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}

export default NPMPackage