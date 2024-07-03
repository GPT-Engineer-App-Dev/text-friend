import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";

const ChatList = ({ chats, activeChatId }) => {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-1">
        {chats.map((chat) => (
          <NavLink
            key={chat.id}
            to={`/chat/${chat.id}`}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 p-3 transition-colors hover:bg-muted",
                isActive || chat.id === activeChatId
                  ? "bg-muted"
                  : "bg-transparent"
              )
            }
          >
            <Avatar>
              <AvatarImage src={chat.profilePicture} alt={chat.name} />
              <AvatarFallback>{chat.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">{chat.name}</span>
                <span className="text-xs text-muted-foreground">
                  {format(new Date(chat.lastMessageTime), "p")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatList;