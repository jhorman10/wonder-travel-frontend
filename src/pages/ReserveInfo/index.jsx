import { DescriptionItem } from '../../components/DescriptionItem';
import WonderTravelLogo from '../../assets/images/Group 1185.svg';
import LocationIcon from '../../assets/images/Path 2202.svg';
import MapLocation from '../../assets/images/Group 536.svg';
import DownArrow from '../../assets/images/Icon - Keyboard Arrow - Up - Dark.svg';
import WhatsAppIcon from '../../assets/images/whatsapp (1)@3x.png';

export const ReserveInfo = () => {
  return (
    <section id="reserve-info">
      <div className="info-box-1">
        <img className="wonder-travel-logo" src={WonderTravelLogo} alt="" />
        <div>
          <h1 className="wonder-travel-title">Guainía y Cerros de Mavicure</h1>
          <hr className="hr-divider" />
        </div>
      </div>
      <div className="info-box-2">
        <p className="text-description-1">
          Viaje por los Cerros de Mavicure y sus alrededores
        </p>
        <div className="dayBox">
          <img className="locationIcon" src={LocationIcon} alt="" />
          <p className="dayBox-text">5 días, 3 noches*</p>
        </div>
        <div className="location">
          <img className="location-map" src={MapLocation} alt="" />
          <p className="location-text">Orinoquía (Guainía, Colombia)</p>
        </div>
        <div className="description">
          <DescriptionItem />
        </div>
        <div className="reserve-info-box">
          <p className="lbl-whatsapp">WhatsApp:</p>
          <button className="info-button" type="button">
            <img className="WhatsAppIcon" src={WhatsAppIcon} alt="" />
            Reservar / información
          </button>
          <img className="arrow-down" src={DownArrow} alt="" />
        </div>
      </div>
    </section>
  );
};
