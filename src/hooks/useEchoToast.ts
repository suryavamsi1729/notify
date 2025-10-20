import { useContext } from "react";
import NotificationContext from "../context/NotificationContext";

export const useEchoToast = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotify must be used within a NotificationProvider");
  }
  return context.echoToast;
};