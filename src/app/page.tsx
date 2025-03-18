import Navbar from "@/components/layout/navbar";
import { ChatInput } from "@/components/chat/input";
import { MessageList } from "@/components/chat/message-list";


export default function Home() {

  return (
    <div className="h-screen">
      
      {/* header */}
      <Navbar />

      <main className="flex flex-col pt-20 h-full">

        {/* List of all messages */}
        <MessageList />

        {/* Chat input with send button */}
        <ChatInput  />          
      </main>
    </div>
  );
}
