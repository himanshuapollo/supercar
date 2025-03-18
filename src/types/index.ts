export type WeatherOutput =  {
  output: string;
  name: "get_weather";
}

export type DealershipOutput = {
  output: string;
  name: "get_dealership_address";
}

export type AppointmentOutput =  {
  output: string;
  name: "check_appointment_availability" | "schedule_appointment";
}
  
  export type ToolOutputType = WeatherOutput | DealershipOutput | AppointmentOutput;

export type Message =  {
    id: string;
    role: "user" | "assistant";
    content: string;
    toolUse?: string;
    toolOutput?: ToolOutputType;
  }
  