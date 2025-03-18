import { Bus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white  py-2 px-6 fixed top-0 w-full flex justify-between items-center">
      <h1 className="text-xl font-semibold text-zinc-800 italic ">
        SuperCar Virtual Sales Assistant
      </h1>
      <Bus className="size-10 text-zinc-600" />
    </header>
  );
}