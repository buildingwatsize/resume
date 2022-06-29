import NPMPackage from "components/Contents/PublicPackage/NPMPackage"
import TopicLayout from "components/Layout/TopicLayout"

import IconNPM from "assets/icons/npm"
import Col from "components/Flex/Col"
import Row from "components/Flex/Row"

// TODO: Add more list
const packageList = [
  {
    icon: IconNPM,
    title: "cra-template-watsize-antd-redux",
    description: "The react-antd template for Create React App by Watsize.",
    link: "https://www.npmjs.com/package/cra-template-watsize-antd-redux",
  },
  {
    icon: IconNPM,
    title: "thaidatepicker-react",
    description: "Thaidatepicker-react is a component for ReactJS that likes other DatePicker, but all we need is Buddhist Year (25XX – aka Thai Year) come with the right render day (example: Sat, 29 Feb 2020 must be equal to Sat, 29 Feb 2563) so I wish this component will be a useful thing to you :D. Happy Coding.",
    link: "https://www.npmjs.com/package/thaidatepicker-react",
  }
]

const PublicPackage = () => {
  return (
    <TopicLayout id="public-package" title="That's mine!">
      <div className="w-full max-w-3xl m-auto">
        <Row>
          {packageList.map(p => {
            return (
              <Col key={p.title} span={6}>
                <NPMPackage
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  link={p.link}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    </TopicLayout>
  )
}

export default PublicPackage