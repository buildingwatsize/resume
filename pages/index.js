import MainLayout from 'components/Layout/MainLayout'
import PageTitle from 'components/Layout/PageTitle'
import Splashscreen from 'components/Splashscreen/Splashscreen'

const Home = () => {
  return (
    <MainLayout>
      <Splashscreen active={false} />
      <PageTitle title={"Home"} subtitle={"หน้าแรก"} />
    </MainLayout>
  )
}

export default Home