import { Route, Routes } from "react-router-dom";
import { SidebarData } from "./components/Sidebar/SidebarData";
import SidebarMenu from "./components/Sidebar/SidebarMenu";

function App() {
  return (
    <>
      <div className="flex">
        <SidebarMenu />
        <div className="bg-gray-200 flex-grow">
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
