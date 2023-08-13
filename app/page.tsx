import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <main id="ABOUT" className="antialiased bg-[#0f172a] h-full">
      <div className="max-w-7xl md:flex mx-auto h-full px-7">
        <Header />
        <main className="h-full md:w-1/2">
          <Main />
        </main>
      </div>
    </main>
  );
}
