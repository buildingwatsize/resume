import Image from "next/image";
import PropTypes from "prop-types";

const Icon = ({ width, height, src }) => {
  if (!!!src) return null;
  return (
    <div className="flex justify-end" style={{ width, height }}>
      <div
        id="img-3"
        className="h-full relative w-full max-w-48 hover:scale-110 ease-in-out duration-200"
      >
        <Image src={src} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

Icon.defaultProps = {
  width: "100%",
  height: "100%",
  src: null,
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.object,
};

export default Icon;
