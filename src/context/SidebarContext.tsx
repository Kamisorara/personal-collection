import { createContext } from "react";

const expandedMode = {
  expanded: true,
}

const SidebarContext = createContext(expandedMode);

export default SidebarContext;