import useExpandedStore from "../../store/Expanded.tsx"

interface SiderBarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

const SidebarItem = ({ icon, text, active, alert }: SiderBarItemProps) => {
  const { expanded } = useExpandedStore();
  return (

    <>
      <li className={`raletive flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
          ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }`
      }>
        {icon}
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
      </li>
    </>
  );
}

export default SidebarItem;