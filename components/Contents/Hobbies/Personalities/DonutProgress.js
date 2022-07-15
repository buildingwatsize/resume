import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DonutProgress = ({ title, description, color, percentage }) => {
  return <div
    className="h-full w-[8em] p-4 flex flex-col justify-between rounded-md text-center shadow-md opacity-90 hover:opacity-100"
    style={{ backgroundColor: color }}
  >
    <div className="mb-4 font-bold text-sm">{title}</div>
    <div className="">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: '#ffffffcc',
          trailColor: '#ffffff33',
          textColor: '#ffffffcc',
        })}
      />
    </div>
    <div className="mt-4"><hr /></div>
    <div className="mt-2 uppercase font-bold text-xs">{description}</div>
  </div>
}

DonutProgress.defaultProps = {
  title: "Title",
  description: "Description",
  color: "#4298b4",
  percentage: 100,
}

DonutProgress.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  percentage: (props, propName, componentName) => {
    if (typeof props[propName] != "number") {
      return new Error('Invalid type of `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
    }
    if (props[propName] < 0 || props[propName] > 100) {
      return new Error('Invalid percentage value (it should be 0-100)');
    }
  }
}

export default DonutProgress