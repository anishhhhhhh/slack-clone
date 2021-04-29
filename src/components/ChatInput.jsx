import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Chatbackground, ChatInputContainer } from "../styles/ChatInput.styled";

const ChatInput = ({ channelId, channelName, chatRef }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <Chatbackground>
      <ChatInputContainer>
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message #${channelName}`}
          />
          <Button hidden type="submit" onClick={sendMessage}>
            Send
          </Button>
        </form>
      </ChatInputContainer>
    </Chatbackground>
  );
};

export default ChatInput;
