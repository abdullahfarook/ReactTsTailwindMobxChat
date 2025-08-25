import { Message } from "./message";

export type TConversation = {
  id: string;
  title: string;
  updatedOn: Date;
  messages?: Message[];
}
export const convs: TConversation[] = [
    {
        id: "995db14f-1359-4784-b27b-8ce3d7f34600",
        title: "Riverpod Alternatives for React",
        updatedOn: new Date(),
    },
    {
        id: "6736b91f-e3df-4738-bade-0582d732b2f6",
        title: "Yolo Greetings and Assistance",
        updatedOn: new Date(),
    },
    {
        id: "8f31f893-b2cd-46de-926c-c49ea5fe6652",
        title: "Friendly Greetings and Assistance",
        updatedOn: new Date(),
    },
    {
        id: "995db14f-1359-4784-b27b-8ce3d7f34601",
        title: "Greeting and Assistance Inquiry",
        updatedOn: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
    }
]