import { cva } from "class-variance-authority";
export const notificationVariants = cva(
  "",
  {
    variants: {
      type: {
        info: "bg-blue-300/40 border-blue-500",
        success: "bg-green-300/40 border-green-500 ",
        warning: "bg-yellow-300/40 border-yellow-500",
        error: "bg-red-300/40 border-red-500",
      },
      position:{
        topRight: "right-6 top-6",
        bottomRight: "right-6 bottom-6"
      },
      animation: {
        slide: "animate-slideIn",
        fade : "animate-slideOut"
      }

    },
    defaultVariants: {
      type: "info",
      position: "topRight",
      animation:"slide"
    },
  }
);