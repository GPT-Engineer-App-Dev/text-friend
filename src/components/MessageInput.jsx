import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Smile, Paperclip, Send } from "lucide-react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center gap-2 p-4 border-t">
      <Button variant="outline" size="icon">
        <Smile className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon">
        <Paperclip className="h-5 w-5" />
      </Button>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-1"
      />
      <Button onClick={handleSend} variant="primary" size="icon">
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default MessageInput;