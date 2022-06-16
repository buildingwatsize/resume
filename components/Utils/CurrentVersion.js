import packageJson from '/package.json'
const CurrentVersion = ({ hidden }) => <div className={hidden && 'hidden'}>{packageJson.description} | version: {packageJson.version}</div>
export default CurrentVersion