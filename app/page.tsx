// import Image from "next/image";
import HeroSection from "./home/page";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen m-0">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
