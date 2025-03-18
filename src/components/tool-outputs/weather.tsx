import { Cloud } from "lucide-react";

type WeatherDisplayProps = {
  data: string;
};

export function WeatherDisplay({ data }: WeatherDisplayProps) {
  return (

       <div className="p-5 bg-muted rounded-md" >
        <Cloud className="text-blue-500 size-8 mb-3" />
        {data}
       </div>
  );
}