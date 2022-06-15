
import Footer from 'components/Layout/Footer'
import Header from 'components/Layout/Header'
import { ClassCombiner } from 'utils/'

const ErrorLayout = ({ children, className, ...rest }) => {
  return (
    <div className={ClassCombiner("h-screen flex flex-col", className)} {...rest}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default ErrorLayout