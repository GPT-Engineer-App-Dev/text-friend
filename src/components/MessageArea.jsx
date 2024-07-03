import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";

const MessageArea = ({ messages }) => {
  return (
    <ScrollArea className="flex-1 p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src={message.profilePicture} alt={message.sender} />
            <AvatarFallback>{message.sender[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{message.sender}</span>
              <span className="text-xs text-muted-foreground">
                {format(new Date(message.timestamp), "p")}
              </span>
            </div>
            <p className="text-sm">{message.text}</p>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
};

export default MessageArea;