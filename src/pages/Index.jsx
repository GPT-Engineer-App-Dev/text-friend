import { useState } from "react";
import { Search, MoreVertical, Send, Smile, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

const Index = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      timestamp: "10:30 AM",
      messages: [
        { sender: "John Doe", text: "Hey, how are you?", timestamp: "10:30 AM" },
        { sender: "You", text: "I'm good, thanks!", timestamp: "10:32 AM" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Are we still on for today?",
      timestamp: "9:15 AM",
      messages: [
        { sender: "Jane Smith", text: "Are we still on for today?", timestamp: "9:15 AM" },
        { sender: "You", text: "Yes, see you at 5!", timestamp: "9:17 AM" },
      ],
    },
  ]);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      sender: "You",
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedChats = chats.map((chat) =>
      chat.id === selectedChat.id
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    );

    setChats(updatedChats);
    setMessage("");
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/3 border-r">
        <div className="flex items-center justify-between p-4 border-b">
          <Avatar className="h-10 w-10" />
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <Input placeholder="Search or start new chat" />
        </div>
        <ScrollArea className="h-[calc(100vh-160px)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center p-4 cursor-pointer ${
                selectedChat?.id === chat.id ? "bg-muted" : ""
              }`}
              onClick={() => handleChatClick(chat)}
            >
              <Avatar className="h-10 w-10" />
              <div className="ml-4">
                <div className="font-semibold">{chat.name}</div>
                <div className="text-sm text-muted-foreground">{chat.lastMessage}</div>
              </div>
              <div className="ml-auto text-xs text-muted-foreground">{chat.timestamp}</div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="w-2/3 flex flex-col">
        {selectedChat ? (
          <>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <Avatar className="h-10 w-10" />
                <div className="ml-4">
                  <div className="font-semibold">{selectedChat.name}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <ScrollArea className="flex-1 p-4 space-y-4">
              {selectedChat.messages.map((msg, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Avatar className="h-8 w-8" />
                  <div>
                    <div className="text-sm">{msg.sender}</div>
                    <div className="text-sm">{msg.text}</div>
                    <div className="text-xs text-muted-foreground">{msg.timestamp}</div>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="flex items-center p-4 border-t">
              <Button variant="ghost" size="icon">
                <Smile className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input
                className="flex-1 mx-4"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button variant="ghost" size="icon" onClick={handleSendMessage}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1">
            <div className="text-center">
              <h1 className="text-3xl">Your Blank Canvas</h1>
              <p>Chat with the agent to start making edits.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;