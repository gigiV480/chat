import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import styles from "./ContactList.module.css";

type User = {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage?: string;
  lastTime?: string;
};

interface ContactsListProps {
  selectedContact: User | null;
  onSelectContact: (user: User) => void;
}

export function ContactsList({
  selectedContact,
  onSelectContact,
}: ContactsListProps) {
  const [contacts, setContacts] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setCurrentUser);
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const usersQuery = query(collection(db, "users"));
    const unsub = onSnapshot(usersQuery, async (snapshot) => {
      const contactPromises = snapshot.docs
        .filter((doc) => doc.id !== currentUser.uid)
        .map(async (docSnap) => {
          const user = { id: docSnap.id, ...docSnap.data() } as User;

          const chatId =
            currentUser.uid < user.id
              ? `${currentUser.uid}_${user.id}`
              : `${user.id}_${currentUser.uid}`;

          const chatDocRef = doc(db, "chats", chatId);

          return new Promise<User>((resolve) => {
            onSnapshot(chatDocRef, (chatSnap) => {
              if (chatSnap.exists()) {
                const data = chatSnap.data();
                user.lastMessage = data.lastMessage || "";
                user.lastTime =
                  data.lastTimestamp?.toDate().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }) || "";
              } else {
                user.lastMessage = "";
                user.lastTime = "";
              }
              resolve(user);
            });
          });
        });

      const updatedContacts = await Promise.all(contactPromises);
      setContacts(updatedContacts);
    });

    return () => unsub();
  }, [currentUser]);

  return (
    <aside className={styles.contactsList}>
      <h3 className={styles.title}>Chats</h3>
      <ul>
        {contacts.map((user) => (
          <li
            key={user.id}
            className={
              selectedContact?.id === user.id ? styles.selectedContact : ""
            }
            onClick={() => onSelectContact(user)}
          >
            <img
              className={styles.avatar}
              src={user.avatarUrl || "/default-avatar.jpg"}
              alt={user.name}
            />
            <div className={styles.contactInfo}>
              <div className={styles.contactName}>{user.name}</div>
              <div className={styles.lastMessage}>
                {user.lastMessage || "No messages yet"}
              </div>
            </div>
            <div className={styles.lastMessageTime}>{user.lastTime || ""}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
