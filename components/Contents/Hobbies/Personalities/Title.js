import PropTypes from 'prop-types'

import IconExternalLink from 'assets/icons/external_link'
import ClickAndGo from "components/Utils/ClickAndGo"

const Title = ({ title, abbr, link, timestamp }) => {
  return (
    <div className="m-2 min-w-[50%] px-2">
      <div className="font-bold text-lightest-blue xl:text-lg 2xl:text-2xl">{title}</div>
      <div className="flex gap-2 items-center text-white/60 xl:text-lg 2xl:text-2xl">
        <span>({abbr})</span>
        <ClickAndGo link={link}>
          <i className="w-5 h-5 text-white/40 hover:text-white/80 cursor-pointer">{IconExternalLink}</i>
        </ClickAndGo>
      </div>
      <div className="text-sm text-white/40 py-4 xl:text-lg 2xl:text-2xl">Test Taken: {timestamp}</div>
    </div>
  )
}

Title.defaultProps = {
  title: "",
  abbr: "",
  link: "",
  timestamp: "",
}

Title.propTypes = {
  title: PropTypes.string,
  abbr: PropTypes.string,
  link: PropTypes.string,
  timestamp: PropTypes.string,
}

export default Title
