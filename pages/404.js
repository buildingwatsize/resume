import React from 'react'
import Link from 'next/link'
import ErrorLayout from 'components/Layout/ErrorLayout'
import Loading from 'components/Loading/Loading'

import * as notFound from 'assets/loading/not_found'

const FOOTER_HEIGHT = '100px'
export default () => {
  return (
    <ErrorLayout>
      <Loading
        json={notFound}
        width={"50%"}
        height={"auto"}
        className='bg-primary text-white'
        style={{ height: `calc(100vh - ${FOOTER_HEIGHT})`, minHeight: '750px' }}
        text={
          <Link href="/">
            <div className="cursor-pointer bg-secondary hover:bg-secondary/60 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              🏠 TAKE ME HOME
            </div>
          </Link>
        }
      />
    </ErrorLayout>
  )
}
