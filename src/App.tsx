import { Clipboard, BookImage, Gamepad2, LibraryBig, Settings, LifeBuoy } from "lucide-react";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarItem from "./components/Sidebar/SidebarItem";

function App() {
  return (
    <>
      <Sidebar>
        <SidebarItem icon={<LibraryBig size={20} />} text="Books" active />
        <SidebarItem icon={<Gamepad2 size={20} />} text="Games" />
        <SidebarItem icon={<BookImage size={20} />} text="Photos" alert />
        <SidebarItem icon={<Clipboard size={20} />} text="Videos" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
    </>
  );
}

export default App;
