import PropTypes from "prop-types";

import IconExternalLink from "assets/icons/external_link";
import ClickAndGo from "components/Utils/ClickAndGo";
import { ClassCombiner } from "utils/index";

const Title = ({
  title,
  abbr,
  description,
  link,
  timestamp,
  titleClassName,
}) => {
  return (
    <div className="m-2 min-w-[70%] lg:min-w-[60%] px-2 flex flex-col">
      <div
        className={ClassCombiner(
          "font-bold text-white text-xl xl:text-lg 2xl:text-2xl",
          titleClassName
        )}
      >
        {title}
      </div>
      <div className="flex gap-2 items-center text-lightest-blue xl:text-lg 2xl:text-2xl">
        <span>({abbr})</span>
        <ClickAndGo link={link}>
          <i className="w-5 h-5 text-white/40 hover:text-white/80 cursor-pointer">
            {IconExternalLink}
          </i>
        </ClickAndGo>
      </div>
      <span className="leading-none py-2 text-sm text-lighter-blue-blue pt-3">
        {description}
      </span>
      <div className="text-xs text-white/40 xl:text-sm 2xl:text-lg">
        Test Taken: {timestamp}
      </div>
    </div>
  );
};

Title.defaultProps = {
  title: "",
  abbr: "",
  link: "",
  timestamp: "",
};

Title.propTypes = {
  title: PropTypes.string,
  abbr: PropTypes.string,
  link: PropTypes.string,
  timestamp: PropTypes.string,
};

export default Title;
