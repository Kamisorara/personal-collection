import { NavLink } from "react-router-dom";
import useExpandedStore from "../../store/Expanded.tsx"

interface SiderBarItemProps {
  icon: React.ReactNode;
  text: string;
  alert?: boolean;
  linkPath: string;
}

const SidebarItem = ({ icon, text, alert, linkPath }: SiderBarItemProps) => {
  const { expanded } = useExpandedStore();
  return (
    <>
      <NavLink to={linkPath} className={({ isActive }) =>
        `
          raletive flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
          ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
        `
      }>
        <div className="hover:scale-125 transition-all duration-300 ease-in-out">
          {icon}
        </div>
        <span className={`transition-all overflow-hidden ${expanded ? "w-52 ml-3" : "w-0"}`}>
          {text}
        </span>
        {alert && <div className={`w-2 h-2 rounded bg-indigo-400   ${expanded ? "" : "hidden"}`}></div>}
        {!expanded && <div className={`absolute left-14 rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all 
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}>
          {text}
        </div>}
      </NavLink>

    </>
  );
}

export default SidebarItem;