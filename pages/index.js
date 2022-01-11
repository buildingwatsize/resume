import Header from '../components/Layout/Header'
import MainLayout from '../components/Layout/MainLayout'
import Footer from '../components/Layout/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <MainLayout>
        Test
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </MainLayout>
      <Footer />
    </div>
  )
}

export default Home