import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { useState } from "react";
import SidebarContext from "../../context/SidebarContext";


interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const [expandedMode, setExpandedMode] = useState<boolean>(true);
  const toggleExpandedMode = () => {
    setExpandedMode(!expandedMode);
  }
  return (
    <>
      <div className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm w-fit">

          {/* head */}
          <div className="p-4 pb-4 flex items-center justify-between">
            <h2 className={`font-bold text-xl overflow-hidden transition-all ${expandedMode ? "w-32" : "w-0"}`}>
              Collections
            </h2>
            <button
              onClick={() => {
                setExpandedMode(curr => !curr)
              }}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200">
              {expandedMode ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          {/* Sidebar menu items */}
          <SidebarContext.Provider value={{ expandedMode, toggleExpandedMode }}>
            <ul className="flex-1 px-3">
              {children}
            </ul>
          </SidebarContext.Provider>

          {/* foot section */}
          <div className="border-t rounded-md flex p-3">
            <img src="https://i.pinimg.com/736x/1b/10/34/1b1034af3ee3d672f4c5bf89d7d6df44.jpg" className="p-0.5 w-10 h-10 rounded-md bg-gray-200" />
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expandedMode ? "w-52 ml-3" : "w-0"}`}>
              <div className="leading-4">
                <h4 className="font-semibold">username</h4>
                <span className="text-xs text-gray-400">xxxxxxxxxx@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </div>
    </>


  )
};

export default Sidebar;
