import SidebarItem from "./SidebarItem";
import Sidebar from "./Sidebar";
import { SidebarData } from "./SidebarData";
import React from "react";

const SidebarMenu = () => {
  return (
    <>
      <Sidebar>
        {SidebarData.map((item, index) => {
          if (item.title !== "Settings") {
            return (
              <React.Fragment key={index}>
                <SidebarItem icon={item.icon} text={item.title} linkPath={item.path} />
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment key={index}>
                <hr className="my-3" />
                <SidebarItem icon={item.icon} text={item.title} linkPath={item.path} />
              </React.Fragment>
            )
          }
        })}
      </Sidebar>
    </>
  );
}

export default SidebarMenu;