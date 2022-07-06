import AboutMe from 'components/Contents/AboutMe'
import Education from 'components/Contents/Education'
import Hobbies from 'components/Contents/Hobbies'
import PublicPackage from "components/Contents/PublicPackage"
import Skills from 'components/Contents/Skills'
import TechStack from 'components/Contents/TechStack'
import Training from 'components/Contents/Training'
import WorkingExperience from 'components/Contents/WorkingExperience'
import MainLayout from 'components/Layout/MainLayout'
import PageTitle from 'components/Layout/PageTitle'
import Splashscreen from 'components/Splashscreen/Splashscreen'
import CurrentVersion from 'components/Utils/CurrentVersion'

const Home = () => {
  return (
    <MainLayout>
      <Splashscreen active={false} />
      <PageTitle title={"Home"} subtitle={"หน้าแรก"} />

      <div className="p-2 mx-6">
        <AboutMe />
        <TechStack />
        <Skills />
        <Training />
        <WorkingExperience />
        <Education />
        <PublicPackage />
        <Hobbies />
      </div>

      <CurrentVersion hidden />
    </MainLayout>
  )
}

export default Home
