import { useState } from "react";
import axios from "axios";

export const useChatBot = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToBot = async (text: string) => {
    const headers = {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15",
      Origin: "https://yandex.ru",
      Referer: "https://yandex.ru/",
    };

    const payload = {
      text: text,
      bot: "main",
      uid: "a559b5e4-6cf8-4729-9ab0-a4e232550620",
    };

    try {
      setIsLoading(true);
      const response = await axios.post("https://xu.su/api/send", payload, { headers });

      // Проверяем, что ответ содержит данные
      if (response.data) {
        return response.data; // Возвращаем ответ бота
      } else {
        throw new Error("Пустой ответ от сервера");
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);

      // Возвращаем понятное сообщение об ошибке
      if (axios.isAxiosError(error)) {
        if (error.code === "ERR_NETWORK") {
          return "Ошибка сети. Проверьте интернет-соединение.";
        } else if (error.response) {
          return `Ошибка сервера: ${error.response.status}`;
        } else {
          return "Произошла ошибка при отправке сообщения.";
        }
      } else {
        return "Неизвестная ошибка.";
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessageToBot, isLoading };
};