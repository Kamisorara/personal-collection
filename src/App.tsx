import { Route, Routes } from "react-router-dom";
import { SidebarData } from "./components/Sidebar/SidebarData";
import SidebarMenu from "./components/Sidebar/SidebarMenu";

function App() {
  return (
    <>
      <div className="flex">
        <SidebarMenu />
        <div className=" flex flex-grow m-2 p-2 rounded-xl bg-gray-100">
          <Routes>
            {SidebarData.map((item, index) => {
              return (
                <Route key={index} path={item.path} element={item.page} />
              );
            })}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
