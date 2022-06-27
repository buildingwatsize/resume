import AboutMe from 'components/Contents/AboutMe'
import Attention from 'components/Contents/Attention'
import Education from 'components/Contents/Education'
import Skills from 'components/Contents/Skills'
import TechStack from 'components/Contents/TechStack'
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
        <WorkingExperience />
        <Skills />
        <Education />
        <Attention />
      </div>

      <CurrentVersion hidden />
    </MainLayout>
  )
}

export default Home
