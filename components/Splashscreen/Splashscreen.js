import React from 'react'
import Loading from 'components/Loading/Loading'
import * as catSlider from 'assets/loading/cat_slider.json'

const Splashscreen = ({ active = true }) => {
  if (!active) return <></>
  return (
    <div>
      <Loading
        json={catSlider}
        text={"Moew... Moew..."}
        width={300}
        height={300}
      />
    </div >
  )
}

export default Splashscreen
