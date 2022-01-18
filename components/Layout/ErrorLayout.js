import React from 'react'

import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import Navbar from 'components/Layout/Navbar'

const ErrorLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default ErrorLayout