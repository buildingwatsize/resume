import NPMPackage from "components/Contents/PublicPackage/NPMPackage"
import TopicLayout from "components/Layout/TopicLayout"

import IconNPM from "assets/icons/npm"
import Col from "components/Flex/Col"
import Row from "components/Flex/Row"

const packageList = [
  {
    icon: IconNPM,
    title: "cra-template-watsize-antd-redux",
    description: "The react-antd template for Create React App by Watsize.",
    link: "https://www.npmjs.com/package/cra-template-watsize-antd-redux",
  },
  {
    icon: IconNPM,
    title: "cra-template-watsize-base",
    description: "The react project directory template for Create React App by Watsize.",
    link: "https://www.npmjs.com/package/cra-template-watsize-base",
  },
  {
    icon: IconNPM,
    title: "thaidatepicker-react",
    description: "Thaidatepicker-react is a component for ReactJS that likes other DatePicker, but all we need is Buddhist Year (25XX – aka Thai Year) come with the right render day (example: Sat, 29 Feb 2020 must be equal to Sat, 29 Feb 2563) so I wish this component will be a useful thing to you :D. Happy Coding.",
    link: "https://www.npmjs.com/package/thaidatepicker-react",
  },
  {
    icon: IconNPM,
    title: "thai-address-autocomplete-react",
    description: "Thai-address-autocomplete-react is an input component for ReactJS, which can auto-complete thailand address with a magic by just type something. You can discover more props please see react-autocomplete, so I hope this component will be a useful thing to you :D. Happy Coding.",
    link: "https://www.npmjs.com/package/thai-address-autocomplete-react",
  },
]

const PublicPackage = () => {
  return (
    <TopicLayout id="public-package" title="That's mine!">
      <div className="m-auto w-full max-w-3xl xl:w-[64rem] xl:max-w-5xl">
        <Row>
          {packageList.map(p => {
            return (
              <Col key={p.title} span={12} sm={6} className="flex-grow">
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