import Image from 'next/image'

import ImageBg1 from 'assets/img/personalities/bg-1.svg'
import ImageBg2 from 'assets/img/personalities/bg-2.svg'
import ImageEnfj from 'assets/img/personalities/enfj-protagonist-male.svg'

const title = "Turbulent Protagonist"
const abbr = "ENFJ-T"

const Personalities = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <PersonalitiesIcon />
        <PersonalitiesTitle title={title} abbr={abbr} />
      </div>
    </div>
  )
}

const PersonalitiesIcon = () => {
  // TODO: Fixed size on bg
  // TODO: Added reference link
  const bg1Size = "180px"
  const bg2Size = "200px"
  const imageSize = "130px"
  return (
    <div className="relative flex justify-center items-center w-max">
      <div className="opacity-40">
        <Image src={ImageBg1} width={bg1Size} height={bg1Size} />
      </div>
      <div className="absolute opacity-80">
        <Image src={ImageBg2} width={bg2Size} height={bg2Size} />
      </div>
      <div className="absolute">
        <Image src={ImageEnfj} width={imageSize} height={imageSize} />
      </div>
    </div>
  )
}

const PersonalitiesTitle = ({ title, abbr }) => {
  return (
    <div className="m-2">
      <div className="font-bold">{title}</div>
      <div className="text-white/60">({abbr})</div>
    </div>
  )
}

const Center = ({ children, className = "" }) => (
  <div
    style={
      {
        position: "absolute",
        inset: 0,
        margin: "auto",
      }
    }
    className={className}
  >
    {children}
  </div>
)

export default Personalities

// Thanks: https://www.16personalities.com/profiles/059480edf479b