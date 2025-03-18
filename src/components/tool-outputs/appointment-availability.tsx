import { CalendarCheck2 } from "lucide-react";
import { useChat } from "@/hooks/use-chat";

type AppointmentAvailabilityProps = {
  data: string;
};

export function AppointmentAvailability({ data }: AppointmentAvailabilityProps) {
  const { sendMessage } = useChat();

  //Parse the raw data to original structure
  const rawData = JSON.parse(data);
  const cleanedString = rawData.replace(/```/g, '').trim();
  const appointments = JSON.parse(cleanedString.replace(/'/g, '"').trim());

  const handleTimeSlotClick = (slot: string) => {
    sendMessage(`I would like to schedule an appointment for ${slot}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <CalendarCheck2 className="text-blue-500 size-5" />
        <span className="font-medium">Available Time Slots:</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {appointments?.map((slot: string, index: number) => (
          <div
            key={index}
            onClick={() => handleTimeSlotClick(slot)}
            className="p-2 rounded text-sm text-center bg-zinc-100 hover:bg-zinc-200 font-medium transition-colors cursor-pointer"
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}
