import { create } from "zustand";
import { Message } from "@/types";

interface MessageStore {
  messages: Message[];
  setMessages: (messages: Message[] | ((prev: Message[]) => Message[])) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  setMessages: (messages) => set((state) => ({ 
    messages: typeof messages === "function" ? messages(state.messages) : messages 
  })),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useMessageStore;
