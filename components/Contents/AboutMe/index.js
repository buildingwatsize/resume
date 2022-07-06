import FeatureIcons from './FeatureIcons'

import ImageProfile from 'components/Image/ImageProfile'

import IconChip from 'assets/icons/chip'
import IconCoding from 'assets/icons/coding'
import IconMusic from 'assets/icons/music'
import IconSmile from 'assets/icons/smile'

const featureIconList = [
  { key: "Tech-savvy", icon: IconChip },
  { key: "Music Lover", icon: IconMusic },
  { key: "Enthusiasm", icon: IconSmile },
  { key: "Yes, I ❤️ coding", icon: IconCoding },
]

const AboutMe = () => {
  return (
    <div id="about-me" className='mb-4 pb-4'>
      <div className='sm:flex gap-4 mb-8 sm:mb-4 bg-bold-blue/20'>
        <div className="sm:flex-none w-full sm:max-w-xs bg-medium-blue/20 rounded-lg border border-dark-blue px-4">
          <div className="flex flex-col items-center py-5 text-center">
            <div className="flex mb-3 bg-light-blue/60 shadow-lg rounded-full">
              <ImageProfile />
            </div>
            <div className="mb-1 sm:text-lg text-white font-bold">Chinnawat Chimdee (Wat)</div>
            <div className="text-sm sm:text-base text-white/60">Full-stack Developer</div>
          </div>
        </div>
        <div className='sm:flex-1 p-2 relative rounded-lg font-normal text-white/80 my-3'>
          <div>👋 I'm <span className='text-white font-bold'>Chinnawat Chimdee</span>, aka <span className='text-white font-bold'>"Watsize"</span>. Who be like a Programmer, a Software Developer, a Software Engineer, a DevOps Engineer, or whatever you want 😄.</div>
          <br />
          <div>I'm currently working for 🏦 <span className='text-white font-bold'>Bank of Agriculture and Agricultural Cooperatives (BAAC)</span> in Bangkok, Thailand 🇹🇭.</div>
          <FeatureIcons list={featureIconList} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe