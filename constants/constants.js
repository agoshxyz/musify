import { MdSearch, MdPlaylistAdd, MdFavorite } from "react-icons/md";

import { VscLibrary } from "react-icons/vsc";
import { HiOutlineHome } from "react-icons/hi";

export const navMenu = [
  {
    label: "Home",
    icon: HiOutlineHome,
    routes: "/",
  },
  {
    label: "Search",
    icon: MdSearch,
    routes: "/search",
  },
  {
    label: "Your Library",
    icon: VscLibrary,
    routes: "/library",
  },
];

export const musicMenu = [
  {
    label: "Create Playlist",
    icon: MdPlaylistAdd,
    routes: "/create-playlist",
  },
  {
    label: "Favorites",
    icon: MdFavorite,
    routes: "/favorites",
  },
];
