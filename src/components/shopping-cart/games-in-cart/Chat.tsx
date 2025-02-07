import React, { useState } from "react";
import { useChatBot } from "./useChatBot";
import { Message, ChatProps } from "./types";
import {
  ChatContainer,
  ChatHeader,
  CloseButton,
  ChatMessages,
  Message as MessageStyled,
  ChatInputContainer,
  ChatInput,
  SendButton,
} from "./games.styled";

const Chat: React.FC<ChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { sendMessageToBot, isLoading } = useChatBot();

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage: Message = { text: inputValue, isManager: false };
      setMessages((prev) => [...prev, userMessage]); // Добавляем сообщение пользователя

      const botResponse = await sendMessageToBot(inputValue); // Отправляем сообщение на API
      const botMessage: Message = { text: botResponse, isManager: true };
      setMessages((prev) => [...prev, botMessage]); // Добавляем ответ бота

      setInputValue(""); // Очищаем поле ввода
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <span>Чат с менеджером</span>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ChatHeader>
      <ChatMessages>
        {messages.map((message, index) => (
          <MessageStyled key={index} isManager={message.isManager}>
            {message.text}
          </MessageStyled>
        ))}
        {isLoading && <MessageStyled isManager>Менеджер печатает...</MessageStyled>}
      </ChatMessages>
      <ChatInputContainer>
        <ChatInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите сообщение..."
          disabled={isLoading}
        />
        <SendButton onClick={handleSendMessage} disabled={isLoading}>
          Отправить
        </SendButton>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default Chat;