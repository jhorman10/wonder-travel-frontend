import MountainTop from '../../assets/images/noun_adventure_68979.svg';
import LocationIcon from '../../assets/images/Path 2202.svg';

export const ScheduleDetails = () => {
  return (
    <div className="schedule--details">
    <img src={MountainTop} className="schedule--details--img-top" />
    <div className="schedule--details--title-container">
      <div>
        <h2 className="schedule--details--title-h1">La travesía:</h2>
      </div>
      <div>
        <p className="schedule--details--title-p">
          Wonder Travel
          <img
            className="schedule--details--title-img"
            src={LocationIcon}
            alt=""
          />
        </p>
      </div>
    </div>
  </div>
  )
}
