import { useCallback, useEffect, useMemo, useState, type FC, type ReactNode } from "react";
import {Notification} from "../components/Notification";
import type { NotificationData, NotificationProps, NotificationType,Animation, Audio, Position } from "../types";
import NotificationContext from "./NotificationContext";
import { v4 as uuidv4 } from 'uuid';
import { cn } from "../lib/utils";
import clsx from "clsx";

interface NotificationProviderProps {
    children:ReactNode;
    position: Position;
    animation: Animation;
    audio: Audio;
}
interface NotificationItem extends NotificationProps {
  id: string;
}

const DEFAULT_OPTIONS = {
  duration: 2000,
};

export const NotificationProvider:FC<NotificationProviderProps> = ({children,position="topRight",audio,animation="slide"}) => {
  const [notifications, setNotifications] = useState<NotificationItem[] >([]);
  const len = notifications.length;
  const YDirection = position.includes("top")?"top":"bottom";
  const XDirection = position.includes("Left")?"left":position.includes("Right")?"right":"center";
  const notify = useCallback((
    type:NotificationType, 
    data:NotificationData,
    options: Partial<typeof DEFAULT_OPTIONS> = {}
  ) => {
    const id = uuidv4();
    const { duration } = { ...DEFAULT_OPTIONS, ...options };
    
    if (audio.enabled) {
        const src =
          audio.src ??
          new URL("../assets/sounds/notification.mp3", import.meta.url).href;
        try {
          const sound = new Audio(src);
          sound.volume = 0.75;
          sound.play().catch(() => {});
        } catch {
          console.warn("Invalid sound path:", src);
        }
      }
    const close = () => setNotifications((prev) => prev.filter((n) => n.id !== id));
    const newNotification: NotificationItem = {
        id,
        type,
        data,
        onClose:close
    };
    setNotifications(prev => [...prev, newNotification]);
    setTimeout(close, duration);
  },[audio]);

  const contextValue = useMemo(() => ({ notify }), [notify]);

  useEffect(() => {
    return () => setNotifications([]);
  }, []);

  
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <div id="echo-toast-container" className={cn("fixed inset-4 pointer-events-none z-[999] flex flex-col",
         {
            "justify-start":YDirection === "top",
            "justify-end":YDirection === "bottom",
          }
      )}>
          <div className={cn("w-full h-auto flex flex-row",
            {
              "justify-start":XDirection === "left",
              "justify-end":XDirection === "right",
              "justify-center":XDirection === "center",
            }
          )}>
            <div className="relative w-auto h-auto flex flex-col justify-center items-center">
              {notifications.map((notifyItem , index) => {
                const isCurrent = len - 1 === index;
                return(
                  <Notification 
                    className={
                      clsx("absolute transition-all duration-300",
                      {
                        "relative scale-100":isCurrent,
                        "scale-95": len - 2 === index,
                        "scale-90": len - 2 > index,
                        "top-2": YDirection === "top" && len - 2 === index,
                        "bottom-2": YDirection === "bottom" && len - 2 === index,
                        "top-4": YDirection === "top" && len - 2 > index,
                        "bottom-4": YDirection === "bottom" && len - 2 > index,
                      },
                      {
                        "animate-slideLeft": animation === "slide" && XDirection === "left",
                        "animate-slideRight": animation === "slide" && XDirection === "right",
                        "animate-slideTop" : animation === "slide" && `${YDirection}${XDirection}` === "topcenter",
                        "animate-slideBottom" : animation === "slide" && `${YDirection}${XDirection}` === "bottomcenter",
                      }
                    )
                    } 
                    key={notifyItem.id}
                    {...notifyItem}
                    isTop={isCurrent}
                  />
                )
              })}
            </div>
          </div>
      </div>
        
    </NotificationContext.Provider>
  );
};


