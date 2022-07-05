import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Alert from 'components/Alert/Alert'
import Button from 'components/Button/Button'
import Dialog from 'components/Dialog/Dialog'
import BuyMeACoffee from 'components/Donate/BuyMeACoffee'
import PromptPay from 'components/Donate/PromptPay'
import Col from 'components/Flex/Col'
import Row from 'components/Flex/Row'
import MainLayout from 'components/Layout/MainLayout'
import PageTitle from 'components/Layout/PageTitle'
import InfoIcon from 'components/Utils/InfoIcon'

import PromptPayImage from 'assets/img/promptpay-qrcode.jpg'

const Donate = () => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentMenu, setCurrentMenu] = useState({})

  const handleClick = (menu) => () => {
    setCurrentMenu(menu)
    setVisible(true)
  }
  const handleClickCancelDialog = () => {
    setVisible(false)
  }
  const handleClickOkDialog = () => {
    setLoading(true)
    const { link } = currentMenu
    if (link) router.replace(link)
  }

  const list = [
    {
      name: "BuyMeACoffee",
      link: "https://www.buymeacoffee.com/watsize",
      children: <BuyMeACoffee />,
      renderDialog: (onCancel, onOk) => <Alert
        icon={<InfoIcon />}
        title="ไปยังเว็บไซต์ภายนอก?"
        content={`กดปุ่ม "ยืนยัน" เพื่อจะเปิดเว็บไซต์ภายนอก`}
        action={
          <div className="flex items-center justify-center gap-4 py-2" >
            <Button type="secondary" onClick={onCancel}>ยกเลิก</Button>
            <Button onClick={onOk}>ยืนยัน</Button>
          </div>
        }
      />,
    },
    {
      name: "PromptPay",
      link: "",
      children: <PromptPay />,
      renderDialog: (onCancel, _) => <div>
        <Image src={PromptPayImage} />
        <div className="flex items-center justify-center gap-4 py-2">
          <Button onClick={onCancel}>ปิด</Button>
        </div>
      </div>,
    },
    // {
    //   name: "Paypal",
    //   link: "",
    //   children: <Paypal />,
    //   renderDialog: () => <div></div>,
    // },
  ]

  const dialogContent = currentMenu?.renderDialog?.(handleClickCancelDialog, handleClickOkDialog) || null
  return (
    <MainLayout bgMinimal>
      <PageTitle title={"Donate"} subtitle={"สนับสนุน"} />
      <Row className={"mx-6"}>
        {list.map(l => <Col span={12} sm={6} md={4} key={l.name}>
          <Button className="min-w-[260px] w-full" onClick={handleClick(l)}>
            {l.children}
          </Button>
        </Col>)}
        {/* <Paypal /> */}
      </Row>
      <Dialog visible={visible} loading={loading}>
        <div className="relative top-20 mx-auto p-5 border-0 w-[80vw] max-w-lg sm:w-2/3 sm:max-w-sm shadow-lg rounded-md bg-medium-blue">
          {dialogContent}
        </div>
      </Dialog>
    </MainLayout>
  )
}

export default Donate