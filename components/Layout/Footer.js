import React from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

const iconStyle = (size = 30) => ({
  width: size,
  height: size,
})
const iconSize = iconStyle()
const iconForegroundColor = '#f9f9f9'
const socialUrl = [
  "https://www.facebook.com/chinnawat.chimdee/",
  "https://th.linkedin.com/in/chinnawat-chimdee-0655a1110",
  "https://www.youtube.com/channel/UCm6ytzbE121tHE9tsIgp_Uw",
  "mailto:chinnawat.cpre@gmail.com",
]
const Footer = () => {
  return (
    <footer style={{ justifyContent: "space-around" }}>
      <div>Made with ❤️ by <span className="text-white/60"><Link href={'https://github.com/buildingwatsize'}>Watsize</Link></span></div>
      <div className='flexJustifyCenter gap-2'>
        <div className='flexJustifySpaceBetween gap-1'>
          {socialUrl.map(url => <SocialIcon style={iconSize} fgColor={iconForegroundColor} url={url} />)}
        </div>
      </div>
    </footer>
  )
}

export default Footer
