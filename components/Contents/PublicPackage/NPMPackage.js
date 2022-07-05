import { useRouter } from 'next/router'
import { useState } from "react"

import Alert from "components/Alert/Alert"
import Button from "components/Button/Button"
import Dialog from "components/Dialog/Dialog"
import InfoIcon from "components/Utils/InfoIcon"
import PropTypes from 'prop-types'

const NPMPackage = ({ icon, title, description, link }) => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setVisible(true)
  }
  const handleClickCancelDialog = () => {
    setVisible(false)
  }
  const handleClickOkDialog = () => {
    setLoading(true)
    if (link) router.replace(link)
  }
  return (
    <div className="flex w-full h-full">
      <div className="bg-medium-blue/20 shadow-md cursor-pointer px-8 py-6 rounded-md hover:bg-light-blue/20 flex items-center" onClick={handleClick}>
        <div className="flex-none w-12 m-4">{icon}</div>
        <div className="flex flex-col justify-center items-stretch">
          <div className="text-white font-bold text-lg">{title}</div>
          <div className="text-white/60 text-sm overflow-hidden text-ellipsis line-clamp-2">{description}</div>
        </div>
      </div>

      <Dialog visible={visible} loading={loading}>
        <div className="relative top-20 mx-auto p-5 border-0 w-[80vw] max-w-lg sm:w-2/3 sm:max-w-sm shadow-lg rounded-md bg-medium-blue">
          <Alert
            icon={<InfoIcon />}
            title="ไปยังเว็บไซต์ภายนอก?"
            content={`กดปุ่ม "ยืนยัน" เพื่อจะเปิดเว็บไซต์ภายนอก`}
            action={
              <div className="flex items-center justify-center gap-4 py-2" >
                <Button type="secondary" onClick={handleClickCancelDialog}>ยกเลิก</Button>
                <Button onClick={handleClickOkDialog}>ยืนยัน</Button>
              </div>
            }
          />
        </div>
      </Dialog>
    </div>
  )
}

NPMPackage.defaultProps = {
  icon: "",
  title: "",
  description: "",
  link: "#",
}

NPMPackage.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}

export default NPMPackage