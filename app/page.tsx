import { Body } from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 right-0 w-header">
        <Header />
      </div>

      <div className="fixed w-sidebar h-screen top-0 left-0 overflow-scroll">
        <Sidebar />
      </div>

      <div>
        <Body />
      </div>
    </div>
  );
}
