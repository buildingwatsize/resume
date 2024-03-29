import Col from 'components/Flex/Col'
import Row from 'components/Flex/Row'
import TopicLayout from 'components/Layout/TopicLayout'
import LevelProgress from './LevelProgress'

const codingSkills = [
  { title: "ReactJS", level: 3 },
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
    <TopicLayout id="skills" title='Skills'>
      <div className='bg-medium-blue/20 shadow-md rounded-md w-full p-4'>
        <Row>
          <Col span={12} sm={6} className="px-4">
            {codingSkills.map(s => {
              return (
                <LevelProgress key={s.title} title={s.title} level={s.level} />
              )
            })}
          </Col>
          <Col span={12} sm={6} className="px-4">
            {operationSkills.map(el => {
              return (
                <LevelProgress key={el.title} title={el.title} level={el.level} />
              )
            })}
          </Col>
        </Row>
      </div>
    </TopicLayout>
  )
}

export default Skills