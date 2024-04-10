import Lottie from "react-lottie";
import { ClassCombiner } from "utils";

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const getOptions = (json = "") => {
  return {
    ...defaultOptions,
    animationData: json,
  };
};

const Loading = ({
  json,
  width,
  height = "auto",
  text = "",
  minWidth = "300px",
  maxWidth = "600px",
  fullscreen = false,
  className = "bg-primary text-white",
  style = {},
}) => {
  const fullscreenModeCss = `${fullscreen ? "min-h-screen" : ""}`;
  return (
    <div
      className={ClassCombiner(
        "flex-auto flex-col flexJustifyCenter",
        fullscreenModeCss,
        className
      )}
      style={{ ...style }}
    >
      <div className="noInteraction">
        <Lottie
          options={getOptions(json)}
          width={width}
          height={height}
          style={{ minWidth: minWidth, maxWidth: maxWidth }}
        />
      </div>
      {text && <div className="text-white text-2xl">{text}</div>}
    </div>
  );
};

export default Loading;
