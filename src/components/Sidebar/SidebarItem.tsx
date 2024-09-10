import { useContext } from "react";
import SidebarContext from "../../context/SidebarContext";

interface SiderBarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

const SidebarItem = ({ icon, text, active, alert }: SiderBarItemProps) => {
  const { expandedMode } = useContext(SidebarContext);
  return (

    <>
      <li className={`raletive flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
          ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
        `}>
        {icon}
        <span className={`transition-all overflow-hidden ${expandedMode ? "w-52 ml-3" : "w-0"}`}>
          {text}
        </span>
        {alert && <div className={`w-2 h-2 rounded bg-indigo-400   ${expandedMode ? "" : "hidden"}`}></div>}
      </li>
    </>
  );
}

export default SidebarItem;