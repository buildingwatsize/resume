import * as catSlider from 'assets/loading/cat_slider.json'
import Loading from 'components/Loading/Loading'

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
