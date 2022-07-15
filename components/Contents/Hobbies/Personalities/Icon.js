import Image from 'next/image'
import PropTypes from 'prop-types'

import ImageBg1 from 'assets/img/personalities/bg-1.svg'
import ImageBg2 from 'assets/img/personalities/bg-2.svg'

const Icon = ({ width, height, src }) => {
  if (!(!!src)) return null
  return (
    <div className="relative" style={{ width, height }}>
      <div id="img-1" className="absolute top-0 right-0 bottom-0 flex justify-center items-center opacity-40">
        <Image src={ImageBg1} />
      </div>
      <div id="img-2" className="absolute top-0 right-0 bottom-0 flex justify-center items-center opacity-60">
        <Image src={ImageBg2} />
      </div>
      <div id="img-3" className="absolute top-0 right-0 bottom-0 flex justify-center items-center max-w-[200px] hover:scale-110 ease-in-out duration-200">
        <Image src={src} height={200} />
      </div>
    </div>
  )
}

Icon.defaultProps = {
  width: "100%",
  height: "100%",
  src: null,
}

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.object,
}

export default Icon