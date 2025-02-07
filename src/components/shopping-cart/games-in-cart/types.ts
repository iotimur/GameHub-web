export interface Message {
    text: string;
    isManager: boolean;
  }
  
  export interface ChatProps {
    onClose: () => void;
  }