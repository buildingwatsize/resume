import Image from 'next/image';
import PropTypes from 'prop-types';

const Timeline = ({ list }) => {
  if (!Array.isArray(list)) {
    return null
  }
  return (
    <div className='
      w-full
      max-w-3xl
      bg-medium-blue/20
      p-8
      relative
      shadow-md
      before:content-[""]
      before:absolute
      before:top-0
      before:left-[calc(33%+0.55rem)]
      before:bottom-0
      before:w-1
      before:bg-light-blue
      after:content-[""]
      after:table
      after:clear-both
    '>
      {list.map(l => {
        return (
          <div className="relative clear-both text-left">
            <div className='
        mb-2
        float-left
        w-[33%]
        text-right
        relative
        pr-8
        text-md
      text-white/70
        before:absolute
        before:top-[15%]
        before:-right-2
        before:border-2
        before:border-bold-blue
        before:bg-lighter-blue
        before:w-4
        before:h-4
        before:rounded-full
        '>
              <div className='text-lg font-bold text-white'>{l.time}</div>
              <div className='pt-1'>{l.position}</div>
              <div>{l.location}</div>
              <div className='mt-3 relative h-16'>
                <Image
                  layout="fill"
                  objectFit='contain'
                  objectPosition="right"
                  alt=''
                  src={l.image}
                />
              </div>
            </div>
            <div className="float-right w-[67%] pl-8 text-white/70 mb-10">
              {l.description}
            </div>
          </div>
        )
      })}
    </div>
  )
}

Timeline.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
    position: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.any,
    description: PropTypes.any,
  })),
}

export default Timeline