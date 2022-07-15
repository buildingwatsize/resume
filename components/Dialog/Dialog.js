import { useEffect } from "react"

import * as imposter from 'assets/loading/imposter'
import Loading from "components/Loading/Loading"

const Dialog = ({
  visible,
  loading,
  children,
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [visible])
  return (
    <div
      className="fixed hidden inset-0 bg-dark-blue bg-opacity-70 overflow-y-auto h-full w-full z-50"
      style={{ display: visible ? "block" : "none" }}
    >
      {loading ?
        <div>
          <Loading
            json={imposter}
            height={350}
            fullscreen
            text={"Loading..."}
          />
        </div> : children}
    </div>
  )
}

export default Dialog