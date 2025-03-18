import { Navigation } from "lucide-react";

type DealershipDisplayProps = {
  data: string;
};


export function DealershipDisplay({ data }: DealershipDisplayProps) {
  return (
    <div className="p-5 bg-muted rounded-md" >
    <Navigation className="text-blue-500 size-8 mb-3" />
    {data}
   </div>
  );
}
