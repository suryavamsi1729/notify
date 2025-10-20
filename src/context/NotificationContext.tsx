import { createContext } from "react";
import type { NotificationType, NotificationData, Position, Animation,Audio } from "../types";

interface NotificationContextType {
  echoToast: (
    type: NotificationType,
    data: NotificationData,
    options?: { position?: Position; animation?: Animation; duration?: number; audio?:Audio }
  ) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);
export default NotificationContext