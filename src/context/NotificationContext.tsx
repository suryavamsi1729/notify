import { createContext } from "react";
import type { NotificationType, NotificationData, Position, Animation,Sound } from "../types";

interface NotificationContextType {
  notify: (
    type: NotificationType,
    data: NotificationData,
    options?: { position?: Position; animation?: Animation; duration?: number; sound?:Sound }
  ) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);
export default NotificationContext