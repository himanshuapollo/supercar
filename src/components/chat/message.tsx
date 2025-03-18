import { Message } from "@/types";
import { ToolOutput } from "@/components/tool-outputs";

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[90%] sm:max-w-[80%] text-zinc-800 rounded-md p-4 space-y-4 ${
          message.role === "user" ? "bg-muted" : ""
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
        {message.toolOutput && message.toolUse && (
          <ToolOutput tool={message.toolOutput?.name} data={message.toolOutput?.output} /> //UI Component for different tools
        )}
      </div>
    </div>
  );
}
