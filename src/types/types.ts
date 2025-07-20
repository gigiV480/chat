export type Message = {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
  createdAt: any;
};

export type User = {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage?: string;
  lastMessageTime?: string;
};
