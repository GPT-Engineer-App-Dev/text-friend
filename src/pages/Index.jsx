import { useState } from "react";
import ChatList from "@/components/ChatList";
import Chat from "@/pages/Chat";

const Index = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const chats = [
    {
      id: "1",
      name: "John Doe",
      profilePicture: "/placeholder.svg",
      lastMessage: "Hey, how are you?",
      lastMessageTime: new Date().toISOString(),
      messages: [
        {
          id: "1",
          sender: "John Doe",
          profilePicture: "/placeholder.svg",
          text: "Hey, how are you?",
          timestamp: new Date().toISOString(),
        },
      ],
    },
    // Add more chat objects here
  ];

  return (
    <div className="flex h-full">
      <aside className="w-1/3 border-r">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">User Name</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-muted">
              <span className="sr-only">Status</span>
              <img src="/placeholder.svg" alt="Status" className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted">
              <span className="sr-only">New Chat</span>
              <img src="/placeholder.svg" alt="New Chat" className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted">
              <span className="sr-only">Menu</span>
              <img src="/placeholder.svg" alt="Menu" className="w-5 h-5" />
            </button>
          </div>
        </header>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded"
          />
        </div>
        <ChatList chats={chats} activeChatId={activeChatId} />
      </aside>
      <main className="flex-1">
        {activeChatId ? (
          <Chat chats={chats} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;