import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Car, MessageCircleMore } from "lucide-react";

type ScheduleAppointmentProps = {
  data: string;
};

export default function ScheduleAppointment({ data }: ScheduleAppointmentProps) {


    //Parse the raw data to original structure
    const rawData = JSON.parse(data);
    const cleanedString = rawData?.replace(/```/g, '')?.trim();
    const appointment = JSON.parse(cleanedString?.replace(/'/g, '"').trim()) as Record<string, string>;


  return (
    <div className="bg-muted rounded-md p-5">
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold">Appointment Scheduled</h3>
        <Badge className="rounded-full">ID: {appointment.confirmacion_id}</Badge>

      <div className="space-y-3 mt-6">

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          <span>{appointment.fecha || "Date not specified"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-500" />
          <span>{appointment.hora || "Time not specified"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Car className="w-5 h-5 text-blue-500" />
          <span>{appointment.modelo || "Model not specified"}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircleMore className="w-5 h-5 text-blue-500" />
          <span>{appointment.mensaje || "Message not specified"}</span>
        </div>
      </div>
    </div>
    </div>
  );
}