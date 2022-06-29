import React from 'react'

import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import IconArrowBackCircle from 'assets/icons/arrow_back_circle'
import { ClassCombiner } from 'utils'

const PageTitle = ({ title, subtitle, action, allowBack, onClickBack, className }) => {
  const router = useRouter()
  const handleClickBack = onClickBack ? onClickBack : () => router.back()
  return (
    <div className={ClassCombiner("flex justify-between items-center m-6", className)}>
      <div className='text-3xl font-bold p-2 w-full flex items-center gap-4'>
        {allowBack && <div className='select-none cursor-pointer' onClick={handleClickBack}>
          {IconArrowBackCircle}
        </div>}
        <div className="flex-col">
          <div>{title}</div>
          <div className="text-xl font-normal text-white/80">{subtitle}</div>
        </div>
      </div>
      {action && <div className='w-full text-right'>
        {action}
      </div>}
    </div>
  )
}

PageTitle.defaultProps = {
  title: "",
  subtitle: "",
  action: null,
  allowBack: false,
  onClickBack: undefined,
  className: "",
}

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.any,
  allowBack: PropTypes.bool,
  onClickBack: PropTypes.func,
  className: PropTypes.string,
}


export default PageTitle