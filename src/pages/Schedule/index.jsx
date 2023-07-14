import {
  ScheduleDetails,
  ScheduleStepper,
  ScheduleSteps,
} from '../../components';
import { useSchedule } from '../../hooks/useSchedule';

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
        <ScheduleStepper key={i} dataDay={day} day={i+1}/>
      ))}
      
    </section>
  );
};
