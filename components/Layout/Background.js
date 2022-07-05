import dynamic from "next/dynamic";
import PropTypes from 'prop-types';
import { GetRandomInt } from "utils";

// const SHAPE_LIST = ["blob"]
const ANIMATE_LIST = ["animate-blobFadingA", "animate-blobFadingB"]

const BlobWrapped = dynamic(() => import("components/Blob"), { ssr: false });

const Background = ({ shape, number }) => {
  if (shape !== "blob") return null // future: more shapes
  const items = []
  for (let index = 0; index < number; index++) {
    let size = `${GetRandomInt(7, 15)}rem`
    let left = `${GetRandomInt(1, 100)}%`
    let top = `${GetRandomInt(0, 100)}%`
    items.push([size, left, top])
  }
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
      {items.map((b, idx) => {
        const animate = ANIMATE_LIST[idx % ANIMATE_LIST.length]
        return <BlobWrapped key={`blob-${idx}`} width={b[0]} height={b[0]} left={b[1]} top={b[2]} animate={animate} />
      })}
    </div>
  )
}

Background.defaultProps = {
  shape: "blob",
  number: 11,
}

Background.propTypes = {
  shape: PropTypes.string,
  number: PropTypes.number,
}

export default Background