import {
  ChevronLeftSquare,
  ChevronRightSquare,
  Home,
  Plus,
  Video,
} from "lucide-react";

export const sidebarLinks = [
  {
    route: "/",
    icon: Home,
    label: "Home",
  },
  {
    route: "/upcoming",
    icon: ChevronRightSquare,
    label: "Upcoming",
  },
  {
    route: "/previous",
    icon: ChevronLeftSquare,
    label: "Previous",
  },
  {
    route: "/recordings",
    icon: Video,
    label: "Recordings",
  },
  {
    route: "/personal-room",
    icon: Plus,
    label: "Personal Room",
  },
];
