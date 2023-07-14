import { CardInfo } from '../CardInfo';
import PropTypes from 'prop-types';

export const ScheduleStepper = ({ dataDay = [], day }) => {
  return (
    <div className="schedule--stepper">
      <div className="schedule--stepper-day">
        <p className="schedule--stepper-day-p">Día {day}</p>
      </div>
      {dataDay?.map((day, i) => {
        const { title, subtitle, icon, description } = day;
        return (
          <CardInfo
            key={i}
            title={title}
            subtitle={subtitle}
            icon={icon}
            description={description}
          />
        );
      })}
    </div>
  );
};

ScheduleStepper.propTypes = {
  dataDay: PropTypes.array,
  day: PropTypes.number,
};
