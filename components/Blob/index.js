import PropTypes from 'prop-types';
import { ClassCombiner, GetRandomInt } from "utils";

const Blob = ({ width, height, left, top, animate }) => {
  let animationDelay = `${GetRandomInt(0, 30)}s`
  return <div
    style={{
      width,
      height,
      left,
      top,
      animationDelay,
    }}
    className={ClassCombiner("absolute bg-medium-blue/20", animate)}
  />
}

Blob.defaultValues = {
  width: "15rem",
  height: "15rem",
  left: "0px",
  top: "0px",
  animate: "",
}

Blob.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  animate: PropTypes.string,
}

export default Blob