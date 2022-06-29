import { ClassCombiner } from "utils"

const Content = ({ children, className, ...rest }) => {
  return (
    <main className={ClassCombiner("flex flex-col", "flex-auto", className)} {...rest}>
      {children}
    </main>
  )
}

export default Content