import Button from 'components/Button/Button'
import ErrorLayout from 'components/Layout/ErrorLayout'
import Loading from 'components/Loading/Loading'
import Link from 'next/link'

import * as notFound from 'assets/loading/not_found'

export default () => {
  return (
    <ErrorLayout>
      <Loading
        fullscreen
        json={notFound}
        text={
          <Link href="/">
            <Button>
              🏠 TAKE ME HOME
            </Button>
          </Link>
        }
      />
    </ErrorLayout >
  )
}
