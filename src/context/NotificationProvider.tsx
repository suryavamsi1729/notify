import { useCallback, useMemo, useState, type FC, type ReactNode } from "react";
import {Notification} from "../components/Notification";
import type { NotificationData, NotificationProps, NotificationType, Position,Animation, Sound } from "../types";
import NotificationContext from "./NotificationContext";
import { v4 as uuidv4 } from 'uuid';

interface NotificationProviderProps {
    children:ReactNode;
    
}
interface NotificationItem extends NotificationProps {
  id: string;
}

const DEFAULT_OPTIONS = {
  position: "topRight" as Position,
  animation: "slide" as Animation,
  duration: 3000,
  sound: "off" as Sound,
};

export const NotificationProvider:FC<NotificationProviderProps> = ({children}) => {
  const [notifications, setNotifications] = useState<NotificationItem[] >([]);

  const len = notifications.length;

  const notify = useCallback((
    type:NotificationType, 
    data:NotificationData,
    options: Partial<typeof DEFAULT_OPTIONS> = {}
  ) => {
    const id = uuidv4();
    const { position, animation, duration, sound } = { ...DEFAULT_OPTIONS, ...options };
    if(sound=="on"){
        const audio = new Audio(new URL("../assets/sounds/notification.mp3", import.meta.url).href);
        audio.volume = 1;
        audio.play().catch(() => {});
    }
    const close = () => setNotifications((prev) => prev.filter((n) => n.id !== id));
    const newNotification: NotificationItem = {
        id,
        type,
        data,
        position,
        animation,
        close
    };
    setNotifications(prev => [...prev, newNotification]);
    setTimeout(close, duration);
    setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), duration);
  },[]);

  const contextValue = useMemo(() => ({ notify }), [notify]);
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
        {notifications.map((notifyItem , index) => {
            return(
              <Notification className={`${
                index === len - 1
                ? `scale-100 ${notifyItem.position==="topRight"?"top-6":"bottom-6"}`
                : index === len - 2
                ? `scale-95 ${notifyItem.position==="topRight"?"top-8":"bottom-8"}`
                : `scale-90 ${notifyItem.position==="topRight"?"top-10":"bottom-10"}`
              }`} key={notifyItem.id} {...notifyItem} isTop={len - 1==index?true:false} />
            )
        })}
    </NotificationContext.Provider>
  );
};


