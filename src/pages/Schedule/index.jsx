import {
  ScheduleDetails,
  ScheduleStepper,
  ScheduleSteps,
} from '../../components';
import { useSchedule } from '../../hooks/useSchedule';
import Plane from '../../assets/images/noun_Plane_2797956.svg'

export const Schedule = () => {
  const { data } = useSchedule();
  return (
    <section id="Schedule">
      <h1 className="schedule--title">
        Wonder Travel es la plataforma que conecta viajeros con anfitriones en
        lugares mágicos de Colombia
      </h1>
      <ScheduleSteps />
      <ScheduleDetails />
      {data.map((day, i) => (
        <ScheduleStepper key={i} dataDay={day} day={i + 1} />
      ))}
      <div className='schedule--day--info-ext'>
        <span className="schedule--day--info-content-icon">
          <img src={Plane} alt="" />
        </span>
        <h3 className="schedule--title-h3">Regreso a ciudad de origen</h3>
      </div>
    </section>
  );
};
