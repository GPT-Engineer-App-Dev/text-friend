import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MoreVertical, Send, Smile, Paperclip } from "lucide-react";

const chats = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    timestamp: "10:30 AM",
    profilePicture: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Let's catch up later.",
    timestamp: "9:15 AM",
    profilePicture: "/placeholder.svg",
  },
];

const messages = [
  {
    id: 1,
    sender: "John Doe",
    text: "Hey, how are you?",
    timestamp: "10:30 AM",
    profilePicture: "/placeholder.svg",
  },
  {
    id: 2,
    sender: "You",
    text: "I'm good, thanks! How about you?",
    timestamp: "10:32 AM",
    profilePicture: "/placeholder.svg",
  },
];

const Index = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState("");

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      // Logic to send message
      setMessageText("");
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/3 border-r">
        <div className="flex items-center justify-between p-4 border-b">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User Profile" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <Input placeholder="Search..." />
        </div>
        <ScrollArea className="h-[calc(100vh-128px)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleChatClick(chat)}
            >
              <Avatar className="mr-4">
                <AvatarImage src={chat.profilePicture} alt={chat.name} />
                <AvatarFallback>{chat.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold">{chat.name}</span>
                  <span className="text-xs text-gray-500">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500">{chat.lastMessage}</p>
              </div>
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
                <Avatar className="mr-4">
                  <AvatarImage src={selectedChat.profilePicture} alt={selectedChat.name} />
                  <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-semibold">{selectedChat.name}</span>
              </div>
              <div className="flex space-x-2">
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
            <ScrollArea className="flex-1 p-4">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src={message.profilePicture} alt={message.sender} />
                    <AvatarFallback>{message.sender[0]}</AvatarFallback>
                  </Avatar>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-sm">{message.sender}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{message.text}</p>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </CardContent>
                  </Card>
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
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <Button variant="ghost" size="icon" onClick={handleSendMessage}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
