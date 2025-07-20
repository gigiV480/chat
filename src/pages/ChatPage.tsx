import { useState } from "react";
import { ContactsList } from "../components/ContactList";
import { ChatWindow } from "../components/ChatWindow";
import styles from "./ChatPage.module.css";
import type { User } from "../types/types";

export function ChatPage() {
  const [selectedContact, setSelectedContact] = useState<User | null>(null);
  const [chatOpen, setChatOpen] = useState(false);

  const handleSelectContact = (user: User) => {
    setSelectedContact(user);
    setChatOpen(true);
  };

  const handleBack = () => {
    setChatOpen(false);
    setSelectedContact(null);
  };

  return (
    <div className={`${styles.container} ${chatOpen ? styles.chatOpen : ""}`}>
      <aside className={styles.contactsList}>
        <ContactsList
          selectedContact={selectedContact}
          onSelectContact={handleSelectContact}
        />
      </aside>

      <section className={styles.chatWindow}>
        {selectedContact ? (
          <ChatWindow
            otherUser={selectedContact}
            onBack={chatOpen ? handleBack : undefined}
          />
        ) : (
          <div className={styles.noChatSelected}>
            Select a chat to start messaging
          </div>
        )}
      </section>
    </div>
  );
}

export default ChatPage;
