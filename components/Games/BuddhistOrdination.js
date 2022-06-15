import dynamic from 'next/dynamic'

import noHair from 'assets/img/no-hair.png'
import withHair from 'assets/img/with-hair.png'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

const multiplySize = 2
const getPositionXY = (width, height) => {
  let posX = width / 2
  let posY = height / 2
  return [posX, posY]
}
const getImgWidth = (img, width, height) => {
  let imgWidth = img.width
  let imgHeight = img.height

  // try gain multiply size (if not wider & higher than client screen size)
  if (img.width * multiplySize < width && img.height * multiplySize < height) {
    imgWidth = img.width * multiplySize
    imgHeight = img.height * multiplySize
  }

  return [imgWidth, imgHeight]
}

const BuddhistOrdination = () => {

  let imgNoHair, imgWithHair
  let clientWidth, clientHeight
  let posX, posY

  const preload = (p5) => {
    // preload() runs once
    imgNoHair = p5.loadImage(noHair.src)
    imgWithHair = p5.loadImage(withHair.src)
  }

  const setup = (p5, canvasParentRef) => {
    clientWidth = canvasParentRef.parentElement.clientWidth
    clientHeight = canvasParentRef.parentElement.clientHeight

    p5.createCanvas(clientWidth, clientHeight).parent(canvasParentRef)
    p5.imageMode(p5.CENTER)

    const [_posX, _posY] = getPositionXY(clientWidth, clientHeight)
    posX = _posX
    posY = _posY
    imgNoHair.loadPixels()
    imgWithHair.loadPixels()

    // set "with hair" image as a "background" thing
    const [imgWithHairWidth, imgWithHairHeight] = getImgWidth(imgWithHair, clientWidth, clientHeight)
    p5.image(imgWithHair, posX, posY, imgWithHairWidth, imgWithHairHeight)
  }

  const draw = (p5) => {

    // set "no hair" image as a "fixed" thing
    const [imgNoHairWidth, imgNoHairHeight] = getImgWidth(imgNoHair, clientWidth, clientHeight)
    p5.image(imgNoHair, posX, posY, imgNoHairWidth, imgNoHairHeight)

    // a circle pointer when pressed on screen
    p5.stroke(249, 252, 255)
    p5.strokeWeight(24)
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
    }
  }

  return (
    // Will only render on client-side
    <Sketch preload={preload} setup={setup} draw={draw} className="bg-white" />
  )
}

export default BuddhistOrdination