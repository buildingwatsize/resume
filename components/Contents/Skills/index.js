import TopicLayout from 'components/Layout/TopicLayout'
import LevelProgress from './LevelProgress'

const codingSkills = [
  { title: "ReactJS", level: 4 },
  { title: "Golang", level: 3 },
  { title: "Python", level: 2 },
  { title: "SQL/NoSQL", level: 2 },
]
const operationSkills = [
  { title: "Design", level: 1 },
  { title: "Management", level: 2 },
  { title: "Infrastructure", level: 2 },
  { title: "Testing", level: 2 },
]
const Skills = () => {
  return (
    <TopicLayout id="skills" title='Skills - ความถนัด'>
      <div className='flex gap-8 w-full'>
        <div className='flex-1 pl-4 pr-4'>
          {codingSkills.map(s => {
            return (
              <LevelProgress key={s.title} title={s.title} level={s.level} />
            )
          })}
        </div>
        <div className='flex-1 pl-4 pr-4'>
          {operationSkills.map(el => {
            return (
              <LevelProgress key={el.title} title={el.title} level={el.level} />
            )
          })}
        </div>
      </div>
    </TopicLayout>
  )
}

export default Skills