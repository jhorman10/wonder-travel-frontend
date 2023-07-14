import WonderTravelLogo from '../../assets/images/Group 1185.svg';
import LocationIcon from '../../assets/images/Path 2202.svg';
import MapLocation from '../../assets/images/Group 536.svg';
import Location from '../../assets/images/Group 431.svg';
import DownArrow from '../../assets/images/Icon - Keyboard Arrow - Up - Dark.svg';
import WhatsAppIcon from '../../assets/images/whatsapp (1)@3x.png';
import Adventure from '../../assets/images/noun_adventure_1941281.svg';
import OffRoad from '../../assets/images/noun_off-road_1938384.svg';
import Food from '../../assets/images/noun_Food_2688587.svg';
import Hut from '../../assets/images/noun_Hut_233351.svg';
import { useWhatsAppChat } from '../../hooks';

export const ReserveInfo = () => {
  const { redirectToWhatsApp } = useWhatsAppChat();
  const handleClick = () => {
    redirectToWhatsApp();
  };
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
          <img className="location-map-location" src={Location} alt="" />
          <p className="location-text">Orinoquía (Guainía, Colombia)</p>
        </div>
        <div className="description">
          <div className="description-box">
            <img className="description-box-img" src={Adventure} alt="" />
            <p className="description-box-p">Experiencias cautivantes</p>
          </div>
          <div className="description-box">
            <img className="description-box-img" src={Food} alt="" />
            <p className="description-box-p">Todas las comidas incluidas</p>
          </div>
          <div className="description-box">
            <img className="description-box-img" src={Hut} alt="" />
            <p className="description-box-p">Alojamientos únicos</p>
          </div>
          <div className="description-box">
            <img className="description-box-img" src={OffRoad} alt="" />
            <p className="description-box-p">
              Transporte terrestre y fluvial en el Guainía
            </p>
          </div>
        </div>
        <div className="reserve-info-box">
          <p className="lbl-whatsapp">WhatsApp:</p>
          <button onClick={handleClick} className="info-button" type="button">
            <img className="WhatsAppIcon" src={WhatsAppIcon} alt="" />
            Reservar / información
          </button>
          <a href="#Schedule">
            <img className="arrow-down" src={DownArrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};
