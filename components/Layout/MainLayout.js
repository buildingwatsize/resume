import { ClassCombiner } from 'utils'

import Content from 'components/Layout/Content'
import Footer from 'components/Layout/Footer'
import Header from 'components/Layout/Header'
import Navbar from 'components/Layout/Navbar'

const MainLayout = ({ children, className = '' }) => {
  return (
    <div className={ClassCombiner("bg-primary text-white flex flex-col h-screen overflow-y-auto", className)}>
      <Header />
      <Navbar />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  )
}

export default MainLayout