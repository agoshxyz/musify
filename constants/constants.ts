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

export const artistsData: {
  name: string;
  songs: any[];
}[] = [
  {
    name: "Glitch",
    songs: [
      {
        name: "Astronaut in a Submarine",
        duration: 239,
        artist: "FSM Team",
        url: "https://dl.dropboxusercontent.com/s/9b43fr6epbgji4f/astronaut-in-a-submarine.mp3?dl=0",
      },
    ],
  },
];


