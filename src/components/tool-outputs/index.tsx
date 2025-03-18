import { WeatherDisplay } from './weather';
import { AppointmentAvailability } from './appointment-availability';
import ScheduleAppointment from './schedule-appointment';
import { DealershipDisplay } from './dealership';

type ToolOutputProps = {
  tool: string;
  data: string
};

export function ToolOutput({ tool, data }: ToolOutputProps) {

  // Render Corresponding UI Component by tool name
  switch (tool) {
    case 'get_weather':
      return <WeatherDisplay data={data} />; 
    case 'get_dealership_address':
      return <DealershipDisplay data={data} />;
    case 'check_appointment_availability':
      return <AppointmentAvailability data={data} />;
    case 'schedule_appointment':
      return <ScheduleAppointment data={data} />;
    default:
      return (
        <pre className="text-xs mt-1 overflow-x-auto bg-gray-50 p-2 rounded">
          {JSON.stringify(data, null, 2)} 
        </pre>
      );
  }
}
