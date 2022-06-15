import { useRouter } from 'next/router'

import Button from 'components/Button/Button'
import Card from 'components/Card/Card'
import Col from 'components/Flex/Col'
import Row from 'components/Flex/Row'
import GAMES_LIST from 'components/Games'
import MainLayout from 'components/Layout/MainLayout'
import PageTitle from 'components/Layout/PageTitle'

const Games = () => {
  const router = useRouter()
  const onClickHandler = (_id) => {
    router.push(`${router.pathname}/${_id}`)
  }
  return (
    <MainLayout>
      <PageTitle title={"Games"} subtitle={"สนุกกับเกมง่ายๆ แค่ปลายนิ้ว"} />
      <Row className={"mx-6"}>
        {GAMES_LIST.map((g) => <Col key={g.id} span={12} sm={6} md={4} xl={3} xxl={2}>
          <Card className={"min-w-[235px]"} badge={g.event} tooltip={g.tooltip}>
            <div className="flex flex-col items-center">
              <h3 className="mb-1 text-2xl font-bold">{g.title}</h3>
              <span className="text-white/70 h-[4.5rem] line-clamp-3 w-full">
                {g.description}
              </span>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <Button onClick={() => onClickHandler(g.id)}>
                  Play!
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        )}
      </Row>
    </MainLayout>
  )
}

export default Games