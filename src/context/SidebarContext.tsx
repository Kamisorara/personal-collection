import { createContext } from "react";

const expanded = {
  expandedMode: true,
  toggleExpandedMode: () => {

  },
}

const SidebarContext = createContext(expanded);

export default SidebarContext;