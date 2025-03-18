"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Loader } from "lucide-react";
import { useState } from "react";
import { useChat } from "@/hooks/use-chat";
import useMessageStore from "@/store/message";

export function ChatInput() {
  const { sendMessage } = useChat();
  const { isLoading } = useMessageStore();
  const [input, setInput] = useState("");

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    
    setInput("");
    await sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bottom-0 w-full bg-white p-4">
      <div className="relative w-full">
        <Textarea
          value={input}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... (Shift+Enter for new line)"
          className="flex-1 rounded-md border-2 resize-none min-h-14 max-h-44 h-full pr-7 "
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          size="icon"
          variant="secondary"
          className="absolute right-2.5 bottom-2.5 size-8"
        >
          {isLoading ? (
            <Loader className="animate-spin text-zinc-700" />
          ) : (
            <ArrowUp className="size-5 text-zinc-700" />
          )}
        </Button>
      </div>
    </form>
  );
}
