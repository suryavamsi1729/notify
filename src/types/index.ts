import type { ReactNode } from "react";


export type NotificationType = "info" | "warning" | "error" | "success";

export type Position = "topRight" | "topCenter" | "topLeft"  | "bottomRight" | "bottomCenter" | "bottomLeft";

export type Animation = "fade" | "slide";

export type Audio = {
  enabled: boolean;
  src?: string; 
};

export type NotificationData = {
    icon?: ReactNode;
    title: ReactNode;
    message?: ReactNode;
    action?: ReactNode;
}


export interface NotificationProps{
    type: NotificationType;
    data?: NotificationData;
    onClose?: ()=>void;
}
