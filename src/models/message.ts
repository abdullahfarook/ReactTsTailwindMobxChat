// Type definition
export type TMessage = {
  id: string;
  sender: string;       // e.g. "Abdullah", "GPT-4o"
  role: "user" | "agent";
  content: string;      // message text
};

// Example data
export const chatMessages: TMessage[] = [
  {
    id: "995db14f-1359-4784-b27b-8ce3d7f34600",
    sender: "Abdullah",
    role: "user",
    content: "Hi",
  },
  {
    id: "6736b91f-e3df-4738-bade-0582d732b2f6",
    sender: "GPT-4o",
    role: "agent",
    content: "Hello! How can I assist you today?",
  },
  {
    id: "8f31f893-b2cd-46de-926c-c49ea5fe6652",
    sender: "Abdullah",
    role: "user",
    content: "I can help",
  },
  {
    id: "e0575e7f-b8ac-4834-b175-e4f9732edc10",
    sender: "GPT-4o",
    role: "agent",
    content: "That sounds great! How would you like to help?",
  },
  {
    id: "117059e2-3b9c-4b1f-9d5f-ac1d62834e0a",
    sender: "Abdullah",
    role: "user",
    content: "By giving you commands",
  },
];