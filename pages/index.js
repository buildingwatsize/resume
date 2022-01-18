import MainLayout from 'components/Layout/MainLayout'
import Splashscreen from 'components/Splashscreen/Splashscreen'

const Home = () => {
  return (
    <MainLayout className='bg-primary text-white'>
      <Splashscreen active={false} />
      Test
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </MainLayout>
  )
}

export default Home