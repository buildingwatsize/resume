import Button from "components/Button/Button"
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

import IconDownload from "assets/icons/download"

// PDF resume generator: https://novoresume.com/editor/resume/4be8fd30-074d-11ed-9cfa-49015d6fcaa0
// download by file which placed in public folder
const ResumeFilePath = "/pdf/chinnawat-resume-2022-08-01.pdf"

const Home = () => {
  return (
    <MainLayout>
      <Splashscreen active={false} />
      <PageTitle title={"Home"} subtitle={"หน้าแรก"} action={
        <a href={ResumeFilePath} target="_blank" rel="noopener noreferrer" download>
          <Button>
            <div className="flex gap-1 items-center sm:hidden">
              <div className='text-sm text-white'>{IconDownload}</div>
              <div className='text-sm text-white'>PDF</div>
            </div>
            <div className="hidden sm:block">
              <div className='text-sm text-white'>PDF Version</div>
              <div className="text-xs font-normal text-white/70">Click for download</div>
            </div>
          </Button>
        </a>
      } />

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
