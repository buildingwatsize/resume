import AvatarImage from 'assets/img/avataaars.png'
import ProfileImage from 'assets/img/with-hair.png'
import Image from 'next/image'

const imageSize = "160"
const showProfileImage = false

export default () => {
  let imgSrc = showProfileImage ? ProfileImage : AvatarImage
  return <Image className='rounded-full' src={imgSrc} width={imageSize} height={imageSize} />
  // return <div style={{ width: `${imageSize}px`, height: `${imageSize}px` }} />

}

// Thanks: https://getavataaars.com/?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=White&clotheType=Hoodie&eyeType=Default&eyebrowType=UpDown&facialHairColor=BlondeGolden&facialHairType=Blank&graphicType=Pizza&hairColor=BrownDark&hatColor=PastelOrange&mouthType=Smile&skinColor=Brown&topType=ShortHairTheCaesar