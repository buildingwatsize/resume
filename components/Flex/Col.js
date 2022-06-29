import PropTypes from 'prop-types';
import { ClassCombiner } from 'utils';

const MAX_SPAN = 12
const inRange = (v) => (v > 0 && v < MAX_SPAN)
const basisImplement = (span) => {
  if (inRange(span)) {
    // NOTE: please make sure for listing the `safelist` classes in `tailwind.config.js`
    //       Hint: { pattern: /basis-\d{1,2}\/\d{1,2}/, }
    return `basis-${span}/${MAX_SPAN}`
  } else if (span === MAX_SPAN) {
    return "basis-full"
  }
  return "basis-auto"
}
const breakpointImplement = (sm, md, lg, xl, xxl) => {
  // NOTE: please make sure for listing the `safelist` classes in `tailwind.config.js`
  //       Hint: { variants: ['sm', 'md', 'lg', 'xl', '2xl'], }
  let css = []
  if (inRange(sm) || sm === MAX_SPAN) css.push(`sm:${basisImplement(sm)}`)
  if (inRange(md) || md === MAX_SPAN) css.push(`md:${basisImplement(md)}`)
  if (inRange(lg) || lg === MAX_SPAN) css.push(`lg:${basisImplement(lg)}`)
  if (inRange(xl) || xl === MAX_SPAN) css.push(`xl:${basisImplement(xl)}`)
  if (inRange(xxl) || xxl === MAX_SPAN) css.push(`2xl:${basisImplement(xxl)}`)
  return ClassCombiner(...css)
}

const GUTTER = "px-2"
const Col = ({ sm, md, lg, xl, xxl, span, className, children, ...rest }) => {
  let basis = basisImplement(span)
  let breakpoint = breakpointImplement(sm, md, lg, xl, xxl)
  return (
    <div
      className={ClassCombiner("flex-grow-0 shrink-0", basis, breakpoint, GUTTER, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

Col.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
  span: undefined,
  className: "",
  children: null,
}

Col.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
  span: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Col