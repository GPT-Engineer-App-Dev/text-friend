import { useParams } from "react-router-dom";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Paperclip, MoreVertical } from "lucide-react";
import MessageArea from "@/components/MessageArea";
import MessageInput from "@/components/MessageInput";

const Chat = ({ chats }) => {
  const { chatId } = useParams();
  const chat = chats.find((c) => c.id === chatId);
  const [messages, setMessages] = useState(chat.messages);

  const handleSend = (text) => {
    const newMessage = {
      id: Date.now(),
      sender: "You",
      profilePicture: "/placeholder.svg",
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={chat.profilePicture} alt={chat.name} />
            <AvatarFallback>{chat.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{chat.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <MessageArea messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default Chat;