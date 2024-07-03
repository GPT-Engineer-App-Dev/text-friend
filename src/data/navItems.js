import { Home, MessageSquare, Settings } from "lucide-react";

export const navItems = [
  {
    to: "/",
    title: "Home",
    icon: () => <Home className="h-5 w-5" />,
  },
  {
    to: "/messages",
    title: "Messages",
    icon: () => <MessageSquare className="h-5 w-5" />,
  },
  {
    to: "/settings",
    title: "Settings",
    icon: () => <Settings className="h-5 w-5" />,
  },
];