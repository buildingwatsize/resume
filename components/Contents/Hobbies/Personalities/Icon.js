import Image from 'next/image'
import PropTypes from 'prop-types'

import ImageBg1 from 'assets/img/personalities/bg-1.svg'
import ImageBg2 from 'assets/img/personalities/bg-2.svg'
import ImageEnfj from 'assets/img/personalities/enfj-protagonist-male.svg'

const Icon = ({ width, height }) => {
  return (
    <div className="relative flex justify-center items-center" style={{ width, height }}>
      <div className="absolute opacity-40">
        <Image src={ImageBg1} />
      </div>
      <div className="absolute opacity-60">
        <Image src={ImageBg2} />
      </div>
      <div className={(width || height) ? "w-full" : "w-[45%]"}>
        <Image src={ImageEnfj} />
      </div>
    </div>
  )
}

Icon.defaultProps = {
  width: "100%",
  height: "100%",
}

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Icon