import _ from 'lodash'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Button from 'components/Button/Button'
import GAMES_LIST from 'components/Games'
import MainLayout from 'components/Layout/MainLayout'
import PageTitle from 'components/Layout/PageTitle'
import Loading from 'components/Loading/Loading'

import IconArrowBackCircle from 'assets/icons/arrow_back_circle'
import * as imposter from 'assets/loading/imposter'

const GAMES_ROUTE = "/games"
const NOT_FOUND_TITLE = "ไม่พบเกม"
const NOT_FOUND_DESCRIPTION = "ลองกลับไปหน้าเดิมดีไหม"
const NOT_FOUND_QUOTE = "That's what an imposter would say..."
const GamesID = () => {
  const router = useRouter()
  const { id } = router.query

  const matched = GAMES_LIST.find(g => `${g.id}`.trim() === `${id}`.trim())

  const handleClickBack = () => router.push(GAMES_ROUTE)

  useEffect(() => {
    router.prefetch(GAMES_ROUTE)
  }, [])

  return (
    <MainLayout bgMinimal>
      {!_.isEmpty(matched) ?
        <div key={`gamesId-${id}`} className="flex-grow touch-none flex flex-col">
          <PageTitle title={`Games / ${matched.title}`} subtitle={matched.description} allowBack />
          <div className="flex flex-auto">
            {matched.component}
          </div>
        </div>
        : <div className="pb-8">
          <PageTitle title={NOT_FOUND_TITLE} subtitle={NOT_FOUND_DESCRIPTION} allowBack onClickBack={handleClickBack} />
          <Loading
            json={imposter}
            height={350}
            text={<div className="text-center text-base">
              <div>{NOT_FOUND_QUOTE}</div>
              <div className="mt-6">
                <Button onClick={handleClickBack}>
                  <div className="flex gap-2">{IconArrowBackCircle} BACK</div>
                </Button>
              </div>
            </div>}
          />
        </div>}

    </MainLayout>
  )
}

export default GamesID