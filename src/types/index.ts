import type { ReactNode } from "react";


export type NotificationType = "info" | "warning" | "error" | "success";

export type Position = "topRight" | "bottomRight";

export type Animation = "fade" | "slide";

export type Sound = "on" | "off";


export type NotificationData = {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
}


export interface NotificationProps{
    type: NotificationType;
    data?: NotificationData;
    position?: Position;
    animation?: Animation;
    close?: ()=>void;
}
