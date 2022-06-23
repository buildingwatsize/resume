import AboutMe from 'components/Contents/AboutMe'
import TechStack from 'components/Contents/TechStack'
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

        <div>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-danger relative inline-block mb-4">
            <span className="relative text-xl font-bold text-white">Work Experiences - ประสบการณ์การทำงาน</span>
          </span>
        </div>

        <div>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-danger relative inline-block mb-4">
            <span className="relative text-xl font-bold text-white">Coding Skills - ความถนัด</span>
          </span>
        </div>

        <div>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-danger relative inline-block mb-4">
            <span className="relative text-xl font-bold text-white">Education - การศึกษา</span>
          </span>
        </div>

        <div>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-danger relative inline-block mb-4">
            <span className="relative text-xl font-bold text-white">What we are the same? - ความชอบที่เราอาจจะเหมือนกัน</span>
          </span>
        </div>


      </div>
      <CurrentVersion hidden />
    </MainLayout>
  )
}

export default Home
