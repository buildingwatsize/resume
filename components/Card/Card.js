import _ from 'lodash';
import PropTypes from 'prop-types';
import { ClassCombiner } from 'utils';

import Badge from 'components/Button/Badge';
import ClickTooltip from 'components/Tooltips/ClickTooltips';

const Card = ({ badge, tooltip, children, className, ...rest }) => {
  return (
    <div
      className={ClassCombiner("w-full py-5 px-4 bg-medium-blue rounded-lg shadow-bold-blue shadow-md relative", className)}
      {...rest}
    >
      {badge ? <Badge text={badge} className='select-none absolute top-4 left-4' /> : null}
      {
        !_.isEmpty(tooltip) ? <ClickTooltip className='absolute top-0 right-0'>
          <div className='font-bold text-lg'>
            {tooltip?.name}
          </div>
          <div className='pt-2 font-bold'>
            {tooltip?.title}
          </div>
          <div className='pt-1'>
            {tooltip?.description}
          </div>
        </ClickTooltip>
          : null
      }
      <div className='mt-8 mb-2'>
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  badge: "",
  tooltip: {},
  children: null,
  className: "",
}

Card.propTypes = {
  badge: PropTypes.string,
  tooltip: PropTypes.shape({
    name: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
  }),
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Card