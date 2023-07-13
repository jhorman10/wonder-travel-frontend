import WonderTravelBlack from '../../assets/images/Group 1098.svg';
import ReserveTravels from '../../assets/images/Group 470@3x.png';
import Acotur from '../../assets/images/ACOTUR LOGO AI-01@3x.png';

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact--divider"></div>
      <div className="contact--images-container">
        <div className="contact--image">
          <img src={WonderTravelBlack} alt="" />
        </div>
        <div className="contact--vertical-divider"></div>
        <div className="contact--text">
          <h2 className="contact--text-h2">#ViajaAlMomento</h2>
        </div>
      </div>
      <img className="contact--image--reserve" src={ReserveTravels} alt="" />
      <h3 className='contact--image--acotur-h3'>Miembros de:</h3>
      <img className="contact--image--acotur" src={Acotur} alt="" />
    </section>
  );
};
