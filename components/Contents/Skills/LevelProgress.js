import PropTypes from 'prop-types'

const LEVEL = [
  "Beginner",
  "Intermediate",
  "Experienced",
  "Proficient",
  "Expert",
]

const LevelProgress = ({ title, level }) => {
  if (level < 0 || level >= LEVEL.length) {
    return null
  }
  return (
    <div className='w-full mt-1 mb-1'>
      <div className="flex justify-between mb-1">
        <span className="text-base text-white">{title}</span>
        <span className="text-sm text-white">{LEVEL[level]}</span>
      </div>
      <div className="w-full rounded-full h-2.5 bg-medium-blue/60">
        <div className="bg-lighter-blue h-2.5 rounded-full" style={{ width: `${100 * (level + 1) / 5}%` }}></div>
      </div>
    </div>
  )
}

LevelProgress.propTypes = {
  title: PropTypes.string,
  level: PropTypes.number,
}

export default LevelProgress