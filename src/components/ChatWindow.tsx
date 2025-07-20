import { useEffect, useState, useRef } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import styles from "./ChatWindow.module.css";
import type { User, Message } from "../types/types";

interface ChatWindowProps {
  otherUser: User;
  onBack?: () => void;
}

export function ChatWindow({ otherUser, onBack }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const currentUser = auth.currentUser;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatId =
    currentUser && otherUser
      ? [currentUser.uid, otherUser.id].sort().join("_")
      : "";

  useEffect(() => {
    if (!currentUser || !chatId) return;

    const messagesQuery = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp")
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const msgs: Message[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        msgs.push({ id: doc.id, ...data } as Message);
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatId, currentUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim() || !currentUser) return;

    const text = newMessage.trim();
    const messageData = {
      text,
      senderId: currentUser.uid,
      receiverId: otherUser.id,
      timestamp: Timestamp.now(),
    };

    // 1. Save to messages subcollection
    await addDoc(collection(db, "chats", chatId, "messages"), messageData);

    // 2. Update chat metadata
    await setDoc(
      doc(db, "chats", chatId),
      {
        lastMessage: text,
        lastTimestamp: Timestamp.now(),
        users: [currentUser.uid, otherUser.id],
      },
      { merge: true }
    );

    setNewMessage("");
  };

  return (
    <div className={styles.chatWindow}>
      <header className={styles.chatHeader}>
        {onBack && (
          <button
            className={styles.backButton}
            onClick={onBack}
            aria-label="Back to contacts"
          >
            ← Back
          </button>
        )}
        <img
          className={styles.avatar}
          src={otherUser.avatarUrl || "/default-avatar.jpg"}
          alt={otherUser.name}
        />
        <h2>{otherUser.name}</h2>
      </header>

      <main className={styles.messagesContainer}>
        {messages.map((msg) => {
          const isSentByCurrentUser = msg.senderId === currentUser?.uid;
          return (
            <div
              key={msg.id}
              className={`${styles.message} ${
                isSentByCurrentUser ? styles.sent : styles.received
              }`}
            >
              <div className={styles.messageText}>{msg.text}</div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </main>

      <footer className={styles.messageInputContainer}>
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          className={styles.messageInput}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </footer>
    </div>
  );
}
