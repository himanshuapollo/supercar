import { config } from "@/config";
import useMessageStore from "@/store/message";
import { Message } from "@/types";
import { useRef } from "react";

export function useChat() {
  const { setMessages, setIsLoading } = useMessageStore();
  const sessionId = useRef<string>(crypto.randomUUID());

  const processSSEEvent = (chunk: string, currentAssistantMessage: Message) => {
    const lines = chunk.split("\n");
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
  
      if (line.startsWith("event: ")) {
        const eventType = line.slice(7);
        const dataLine = lines[++i]?.trim();
        if (!dataLine?.startsWith("data: ")) continue;
  
        const data = dataLine.slice(6);
  
        switch (eventType) {
          case "chunk":
            currentAssistantMessage.content += data;
            break;
          case "tool_use":
            currentAssistantMessage.toolUse = data;
            break;
          case "tool_output":
            try {
              const outputData = JSON.parse(data);
              currentAssistantMessage.toolOutput = {
                output: outputData.output,
                name: outputData.name,
              };
            } catch (e) {
              console.error("Failed to parse tool_output data: ", e);
            }
            break;
          case "end":
            return;
        }
  
        setMessages((prev) => [...prev.slice(0, -1), { ...currentAssistantMessage }]);
      }
    }
  };


  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };
  
    const currentAssistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    };
  
    setMessages((prev) => [...prev, userMessage, currentAssistantMessage]);
    setIsLoading(true);
  
    try {
      const response = await fetch(`${config.apiUrl}/query`, {
        method: "POST",
        headers: {
          "Accept": "text/event-stream",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: content, session_id: sessionId.current }),
      });
  
      if (!response.ok) throw new Error("Failed to fetch response");
  
      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader available");
  
      const decoder = new TextDecoder();
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        processSSEEvent(decoder.decode(value), currentAssistantMessage);
      }
    } catch (error) {
      console.error("Error in sendMessage:", error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { ...currentAssistantMessage, content: "An error occurred. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage };
}
