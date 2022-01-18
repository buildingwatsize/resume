import React from 'react'

import Header from 'components/Layout/Header'
import Content from 'components/Layout/Content'
import Footer from 'components/Layout/Footer'

const MainLayout = ({ children, className = '' }) => {
  return (
    <div className={className}>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  )
}

export default MainLayout