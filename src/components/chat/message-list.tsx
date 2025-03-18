"use client";
import { ChatMessage } from "./message";
import { useEffect, useRef } from "react";
import useMessageStore from "@/store/message";

export function MessageList() {
  const { messages } = useMessageStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);


  //Automatically scroll when there's a new message in message list
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto h-full space-y-4 mb-4">
      <div className="max-w-4xl mx-auto h-full p-4">
        {messages?.length > 0 ? (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        ) : (
          <div className="text-3xl font-medium text-muted-foreground h-full grid place-content-center place-items-center">
            Hey Alexis 👋, How can I help you today?
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
