import ManIcon from '../../assets/images/viajero@3x.png';
import WomanIcon from '../../assets/images/viajero (1)@3x.png';
import WonderTravelOrange from '../../assets/images/Group 1101.svg';
import Tucan from '../../assets/images/tucan@3x.png';
import Beach from '../../assets/images/puesta-de-sol@3x.png';
import Mountains from '../../assets/images/montanas (1)@3x.png';
import Trees from '../../assets/images/amazonas (3)@3x.png';
import Whale from '../../assets/images/ballena (2)@3x.png';

export const ScheduleSteps = () => {
  return (
    <div className="schedule--steps">
      <div className="schedule--steps--container">
        <img className="schedule--steps--img" src={ManIcon} alt="" />
        <img className="schedule--steps--img" src={WomanIcon} alt="" />
      </div>
      <span className="schedule--steps--container schedule--steps--container-hr-left"></span>
      <div className="schedule--steps--container">
        <img
          className="schedule--steps--img-wonder-icon"
          src={WonderTravelOrange}
          alt=""
        />
      </div>
      <span className="schedule--steps--container schedule--steps--container-hr-right"></span>
      <div className="schedule--steps--container">
        <div className="schedule-steps--container--icons">
          <img className="schedule--steps--img" src={Tucan} alt="" />
          <img className="schedule--steps--img" src={Beach} alt="" />
        </div>
        <div className="schedule-steps--container--icon">
          <img className="schedule--steps--img" src={Mountains} alt="" />
        </div>
        <div className="schedule-steps--container--icons">
          <img className="schedule--steps--img" src={Trees} alt="" />
          <img className="schedule--steps--img" src={Whale} alt="" />
        </div>
      </div>
    </div>
  );
};
