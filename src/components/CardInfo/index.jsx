import PropTypes from 'prop-types';
import useImageSearch from '../../hooks/useImageSearch';

export const CardInfo = ({ title, subtitle, icon, description }) => {
  const {imageUrl} = useImageSearch(icon)
  const green = 'Actividad Verde';
  const start = 'Inicio';
  return (
    <div
      className={`schedule--day--info ${
        title !== '' ? 'schedule--day--info-card-style' : ''
      }
      ${title === green ? 'green-activity' : ''}
      `}
    >
      <div className="schedule--day--info-content">
        <h2 className="schedule--day--info-h2">{title}</h2>
        <p
          className={`schedule--day--info-p ${
            subtitle === start ? 'p-start' : ''
          }`}
        >
          {subtitle}
        </p>
      </div>
      <div
        className={`${
          title !== green
            ? 'schedule--day--info-content-icon'
            : 'schedule--day--info-content-icon-green'
        }`}
      >
        <img className="schedule--day--info-icon" src={imageUrl} alt="" />
      </div>
      <div className="schedule--day--info-content">
        <p className="schedule--day--info-p">{description}</p>
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
};
