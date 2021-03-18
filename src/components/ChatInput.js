import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ChatInput = ({ channelId }) => {
  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <ChatInputContainer>
      <form action="">
        <input type="text" placeholder={`Message`} />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div``;
