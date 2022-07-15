import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { cloneElement, useEffect, useState } from "react"

import Alert from "components/Alert/Alert"
import Button from "components/Button/Button"
import Dialog from "components/Dialog/Dialog"
import InfoIcon from "components/Utils/InfoIcon"

const ClickAndGo = ({ link, children }) => {
  if (!(!!link)) return null

  const router = useRouter()
  const [mounted, setMounted] = useState(false)
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

  const Wrapped = cloneElement(children, {
    onClick: handleClick,
  })

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  if (!mounted) return null
  return (
    <>
      {Wrapped}
      <Dialog visible={visible} loading={loading}>
        <div className="relative top-20 mx-auto p-5 border-0 w-[80vw] max-w-lg sm:w-2/3 sm:max-w-sm shadow-lg rounded-md bg-medium-blue">
          <Alert
            icon={<InfoIcon />}
            title="ไปยังเว็บไซต์ภายนอก?"
            content={<div className="break-words">
              <div className="text-base text-white/80">กดปุ่ม "ยืนยัน" เพื่อจะเปิดเว็บไซต์ภายนอก</div>
              <span className="text-xs text-white/40">({link})</span>
            </div>}
            action={
              <div className="flex items-center justify-center gap-4 py-2" >
                <Button type="secondary" onClick={handleClickCancelDialog}>ยกเลิก</Button>
                <Button onClick={handleClickOkDialog}>ยืนยัน</Button>
              </div>
            }
          />
        </div>
      </Dialog>
    </>
  )
}

ClickAndGo.defaultProps = {
  link: null,
  children: null,
}

ClickAndGo.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
}

export default ClickAndGo