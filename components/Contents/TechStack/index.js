import BoxStack from "./BoxStack"

import IconAntDesign from 'assets/icons/antdesign'
import IconCypress from 'assets/icons/cypress'
import IconDocker from 'assets/icons/docker'
import IconELK from 'assets/icons/elk'
import IconExpress from 'assets/icons/express'
import IconFigma from 'assets/icons/figma'
import IconFlask from 'assets/icons/flask'
import IconGitLab from 'assets/icons/gitlab'
import IconGoFiber from 'assets/icons/gofiber'
import IconGolang from 'assets/icons/golang'
import IconGraphQL from 'assets/icons/graphql'
import IconHarbor from 'assets/icons/harbor'
import IconHelm from 'assets/icons/helm'
import IconHeroku from 'assets/icons/heroku'
import IconJavaScript from 'assets/icons/javascript'
import IconJenkins from 'assets/icons/jenkins'
import IconJest from 'assets/icons/jest'
import IconK6 from 'assets/icons/k6'
import IconK8s from 'assets/icons/k8s'
import IconKafka from 'assets/icons/kafka'
import IconLess from 'assets/icons/less'
import IconMedium from 'assets/icons/medium'
import IconMiro from 'assets/icons/miro'
import IconMongoDB from 'assets/icons/mongodb'
import IconNextJS from 'assets/icons/nextjs'
import IconNginx from 'assets/icons/nginx'
import IconNodeJS from 'assets/icons/nodejs'
import IconPostman from 'assets/icons/postman'
import IconPython from 'assets/icons/python'
import IconRancher from 'assets/icons/rancher'
import IconReact from 'assets/icons/react'
import IconRedis from 'assets/icons/redis'
import IconRedux from 'assets/icons/redux'
import IconSonarQube from 'assets/icons/sonarqube'
import IconSwagger from 'assets/icons/swagger'
import IconTailwind from 'assets/icons/tailwindcss'
import IconTrello from 'assets/icons/trello'
import IconVSCode from 'assets/icons/vscode'
import IconVueJS from 'assets/icons/vuejs'
import IconVuetify from 'assets/icons/vuetify'
import IconWebpack from 'assets/icons/webpack'
import TopicLayout from "components/Layout/TopicLayout"

const techList = [
  {
    title: "Frontend",
    list: [
      { key: "AntDesign", icon: IconAntDesign },
      { key: "JavaScript", icon: IconJavaScript },
      { key: "less", icon: IconLess },
      { key: "NextJS", icon: IconNextJS },
      { key: "React", icon: IconReact },
      { key: "Redux", icon: IconRedux },
      { key: "TailwindCSS", icon: IconTailwind },
      { key: "VueJS", icon: IconVueJS },
      { key: "Vuetify", icon: IconVuetify },
      { key: "Webpack", icon: IconWebpack },
    ],
  },
  {
    title: "Backend",
    list: [
      { key: "NodeJS", icon: IconNodeJS },
      { key: "Express", icon: IconExpress },
      { key: "Go", icon: IconGolang },
      { key: "GoFiber", icon: IconGoFiber },
      { key: "Python", icon: IconPython },
      { key: "Flask", icon: IconFlask },
      { key: "Kafka", icon: IconKafka },
    ],
  },
  {
    title: "Testing",
    list: [
      { key: "Cypress", icon: IconCypress },
      { key: "Jest", icon: IconJest },
      { key: "k6", icon: IconK6 },
      // { key: "Testify", icon: IconTestify },
    ],
  },
  {
    title: "Infrastructure",
    list: [
      { key: "Docker", icon: IconDocker },
      { key: "Elastic Stack", icon: IconELK },
      { key: "Harbor", icon: IconHarbor },
      { key: "Helm", icon: IconHelm },
      { key: "Heroku", icon: IconHeroku },
      { key: "Kubernetes", icon: IconK8s },
      { key: "Nginx", icon: IconNginx },
      { key: "Rancher", icon: IconRancher },
    ],
  },
  {
    title: "CI/CD",
    list: [
      { key: "Jenkins", icon: IconJenkins },
      { key: "SonarQube", icon: IconSonarQube },
    ],
  },
  {
    title: "Databases",
    list: [
      { key: "GraphQL", icon: IconGraphQL },
      { key: "MongoDB", icon: IconMongoDB },
      { key: "Redis", icon: IconRedis },
    ],
  },
  {
    title: "Management Tools",
    list: [
      { key: "GitLab", icon: IconGitLab },
      { key: "Figma", icon: IconFigma },
      { key: "Miro", icon: IconMiro },
      { key: "Medium", icon: IconMedium },
      { key: "Postman", icon: IconPostman },
      { key: "Swagger", icon: IconSwagger },
      { key: "Trello", icon: IconTrello },
      { key: "VSCode", icon: IconVSCode },
    ],
  },
]

const TechStack = () => {
  return (
    <TopicLayout id="tech-stack" title="As Full-stack, I'm using... - ฉันใช้อะไรบ้าง">
      {
        techList.map(el => (
          <BoxStack key={el.title} title={el.title} list={el.list} />
        ))
      }
    </TopicLayout>
  )
}

export default TechStack

// Thanks: https://devicon.dev/