// import Image from "next/image";
import HomePage from "./home/page";
import Events from "./events/page";
import OurHistory from "./ourHistory/page";
import Rooms from "./rooms/page";

export default function Home() {
  return (
    <main className="font-sans  justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center ">
        <HomePage />
        <OurHistory />
        <Rooms />
        <Events />
      </div>
    </main>
  );
}
