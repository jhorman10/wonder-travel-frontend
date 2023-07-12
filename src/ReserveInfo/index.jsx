import { DescriptionItem } from '../components/DescriptionItem';
import WonderTravelLogo from '../assets/images/Group 1185.svg'
import LocationIcon from '../assets/images/Path 2202.svg';
import MapLocation from '../assets/images/Group 536.svg'

export const ReserveInfo = () => {
  return (
    <section id="reserve-info">
      <img src={WonderTravelLogo} alt="" />
      <div className="content">
        <h1>Guainía y Cerros de Mavicure</h1>
        <hr />
        <p>Viaje por los Cerros de Mavicure y sus alrededores</p>
        <div className="dayBox">
          <img src={LocationIcon} alt="" />
          <p>4 días, 3 noches*</p>
        </div>
        <div className="location">
          <img src={MapLocation} alt="" />
          <p>Orinoquía (Guainía, Colombia)</p>
        </div>
        <div className="description">
          <DescriptionItem />
        </div>
        <div className="reserve-info-box">
          <p></p>
          <button type="button">Reservar / información</button>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};
