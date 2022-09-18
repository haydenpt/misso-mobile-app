import React, { useContext, useState } from "react";
import PopUpMessage from "../utils/PopUpMessage";

const MessageContext = React.createContext();

export function useMessage() {
  return useContext(MessageContext);
}

export function MessageProvider({ children }) {
  // Temporary Message disapear after set second
  const [statusMessage, setStatusMessage] = useState(""); // success or error message
  const [displayMessage, setDisplayMessage] = useState(false); // boolean for show message
  const [messageType, setMessageType] = useState("");

  function setMessage(message, type) {
    setStatusMessage(message);
    setMessageType(type);
  }
  function showMessage(show) {
    setDisplayMessage(show);
  }

  const value = {
    statusMessage,
    displayMessage,
    messageType,
    setMessage,
    showMessage,
  };

  return (
    <MessageContext.Provider value={value}>
      {displayMessage && (
        <PopUpMessage
          statusMessage={statusMessage}
          messageType={messageType}
          showMessage={showMessage}
          setMessage={setMessage}
          displayMessage={displayMessage}
        />
      )}
      {children}
    </MessageContext.Provider>
  );
}
