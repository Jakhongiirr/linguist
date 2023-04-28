import { Body } from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 right-0 w-header z-10">
        <Header />
      </div>

      <div className="relative">
        <div className="fixed w-sidebar h-screen top-0 left-0 overflow-scroll border-r-2 border-black">
          <Sidebar />
        </div>
        <div className="absolute w-body top-24 right-0 p-5 bg-body h-screen text-white z-0">
          <Body />
        </div>
      </div>
    </div>
  );
}
