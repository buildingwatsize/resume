import BoxStack from "./BoxStack"

import IconDocker from 'assets/icons/docker'
import IconExpress from 'assets/icons/express'
import IconFigma from 'assets/icons/figma'
import IconFlask from 'assets/icons/flask'
import IconKafka from 'assets/icons/kafka'
import IconReact from 'assets/icons/react'
import IconRedux from 'assets/icons/redux'
import IconTailwind from 'assets/icons/tailwindcss'

// TODO: Icon G and so on...

const techList = [
  {
    title: "Frontend",
    list: [
      { key: "react", icon: IconReact },
      { key: "redux", icon: IconRedux },
      { key: "tailwind", icon: IconTailwind },
    ],
  },
  {
    title: "Backend",
    list: [
      { key: "express", icon: IconExpress },
      { key: "flask", icon: IconFlask },
      { key: "kafka", icon: IconKafka },
    ],
  },
  {
    title: "Infrastructure",
    list: [
      { key: "docker", icon: IconDocker },
    ],
  },
  {
    title: "CI/CD",
    list: [],
  },
  {
    title: "Testing",
    list: [],
  },
  {
    title: "Databases",
    list: [],
  },
  {
    title: "Management Tools",
    list: [
      { key: "figma", icon: IconFigma },
    ],
  },
]

const TechStack = () => {
  return (
    <div id="i-do-things" className='mb-4 pb-4'>
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-danger relative inline-block mb-4">
        <span className="relative text-xl font-bold text-white">As Full-stack, I do... - ฉันทำอะไรบ้าง</span>
      </span>
      <div className="text-md font-normal text-white/80 my-2 flex flex-wrap">
        {
          techList.map(el => (
            <BoxStack key={el.title} title={el.title} list={el.list} />
          ))
        }
      </div>
    </div>
  )
}

export default TechStack

// Thanks: https://devicon.dev/