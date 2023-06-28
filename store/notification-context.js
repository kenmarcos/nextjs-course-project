import { createContext, useEffect, useState } from "react";

// criar o contexto que poderá ser usado em toda a aplicação
const NotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

// criar um provedor desse contexto que vai:
// - fornecer esse contexto para toda a aplicação
// - gerenciar os dados desse contexto
export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState();

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
