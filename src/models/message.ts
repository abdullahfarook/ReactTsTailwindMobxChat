
import {v4 as uuid} from 'uuid';
export class Message {
  id: string  = uuid();
  conversationId?: string;
  parentId?: string;
  sender!: string;       // e.g. "Abdullah", "GPT-4o"
  role: "user" | "agent" = "user";
  responseType?: "text" | "json" | "html" | "markdown"  = "markdown";
  content?: string;      // message text
  response?: Message;
  isComplete?: boolean;
  isSuccess: boolean = true ;
  updatedOn: Date = new Date();
};


// Example data
export const chatMessages: Message[] = [
  {
    id: "6736b91f-e3df-4738-bade-0582d732b2f7",
    conversationId: "995db14f-1359-4784-b27b-8ce3d7f34600",
    sender: "Abdullah",
    role: "user",
    content: "Hi",
    isComplete: true,
    isSuccess: true,
    responseType: "markdown",
    updatedOn: new Date(),
    response: {
      id: "6736b91f-e3df-4738-bade-0582d732b2f6",
      conversationId: "995db14f-1359-4784-b27b-8ce3d7f34600",
      sender: "GPT-4o",
      role: "agent",
      content: "Hello! How can I assist you today?",
      isComplete: true,
      isSuccess: true,
      responseType: "markdown",
      updatedOn: new Date(),
    }
  },
  {
    id: "8f31f893-b2cd-46de-926c-c49ea5fe6652",
    conversationId: "995db14f-1359-4784-b27b-8ce3d7f34600",
    sender: "Abdullah",
    role: "user",
    content: "I can help",
    isComplete: true,
    isSuccess: true,
    responseType: "markdown",
    updatedOn: new Date(),
    response: {
      id: "e0575e7f-b8ac-4834-b175-e4f9732edc10",
      conversationId: "995db14f-1359-4784-b27b-8ce3d7f34600",
      sender: "GPT-4o",
      role: "agent",
      content: "That sounds great! How would you like to help?",
      isComplete: true,
      isSuccess: true,
      responseType: "markdown",
      updatedOn: new Date(),
    }
  },
  {
    id: "117059e2-3b9c-4b1f-9d5f-ac1d62834e0a",
    conversationId: "995db14f-1359-4784-b27b-8ce3d7f34600",
    sender: "Abdullah",
    role: "user",
    content: "Give me dummy markdown",
    isComplete: true,
    isSuccess: true,
    responseType: "markdown",
    updatedOn: new Date(),
    response: {
      id: "117059e2-3b9c-4b1f-9d5f-ac1d62834e0b",
      conversationId: "995db14f-1359-4784-b27b-8ce3d7f34600",
      sender: "GPT-4o",
      role: "agent",
      isComplete: true,
      isSuccess: true,
      responseType: "markdown",
      updatedOn: new Date(),
      content: 'Sure! Here’s an example of dummy Markdown content:\n\n```markdown\n# Dummy Markdown Example\n\n## Introduction\n\nThis is a sample markdown document that demonstrates various markdown features.\n\n### Features\n\n- **Bold Text**: You can make text bold using double asterisks or double underscores.\n- *Italic Text*: Italicize text with single asterisks or single underscores.\n- ~~Strikethrough~~: Use double tildes to strike through text.\n\n## Lists\n\n### Unordered List\n\n- Item 1\n- Item 2\n  - Subitem A\n  - Subitem B\n\n### Ordered List\n\n1. First item\n2. Second item\n   1. Subitem A\n   2. Subitem B\n\n## Links and Images\n\n[Visit OpenAI](https://www.openai.com)\n\n![Sample Image](https://via.placeholder.com/150)\n\n## Code\n\nYou can include inline code like this: `console.log(\'Hello, World!\');`\n\nAnd you can also create code blocks:\n\n```javascript\nfunction greet() {\n    console.log(\'Hello, World!\');\n}\n```\n\n## Conclusion\n\nThis is a basic example of a Markdown document. You can use it as a template for your own documentation.\n\n```\n\nFeel free to modify or ask for more specific examples!',
    }
  },
];