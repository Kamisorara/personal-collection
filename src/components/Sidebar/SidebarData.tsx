import { BookImage, Clapperboard, Gamepad2, House, LibraryBig, LifeBuoy, Settings as SettingIcon } from "lucide-react";
import Home from "../../pages/Home";
import Books from "../../pages/Books";
import Games from "../../pages/Games";
import Photos from "../../pages/Photos";
import Videos from "../../pages/Videos";
import Help from "../../pages/Help";
import Settings from "../../pages/Settings";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <House size={20} />,
    page: <Home />
  },
  {
    title: "Books",
    path: "/books",
    icon: <LibraryBig size={20} />,
    page: <Books />
  },
  {
    title: "Games",
    path: "/games",
    icon: <Gamepad2 size={20} />,
    page: <Games />
  },
  {
    title: "Photos",
    path: "/photos",
    icon: <BookImage size={20} />,
    page: <Photos />
  },
  {
    title: "Videos",
    path: "/videos",
    icon: <Clapperboard size={20} />,
    page: <Videos />
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingIcon size={20} />,
    page: <Settings />
  },
  {
    title: "Help",
    path: "/help",
    icon: <LifeBuoy size={20} />,
    page: <Help />
  },
];