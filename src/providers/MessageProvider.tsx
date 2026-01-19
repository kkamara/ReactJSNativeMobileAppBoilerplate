import {
  PropsWithChildren,
  createContext,
  useContext,
} from "react";

type MessageType = {
  helloWorld: HelloWorldFunc;
};

const MessageContext = createContext<MessageType>({
  helloWorld: () => "",
});

const MessageProvider = ({ children, }: PropsWithChildren) => {

  function helloWorld(): string {
    return "Hello, World!"
  }

  return (
    <MessageContext.Provider 
      value={{ helloWorld, }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;

export const useMessage = () => useContext(MessageContext);