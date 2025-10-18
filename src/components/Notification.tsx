import type { Animation, NotificationData, NotificationType, Position } from "../types";
import { cn } from "../lib/utils";
import { Info, CircleCheck, TriangleAlert, CircleAlert, CircleX} from 'lucide-react';
import { notificationVariants } from "../lib/variants";

interface NotificationProps{
    className?: string;
    type: NotificationType;
    data?: NotificationData;
    position?: Position;
    animation?: Animation;
    isTop: boolean;
    close?: ()=>void;
}

export const Notification: React.FC<NotificationProps> = ({ className,type,animation,data,close,position,isTop}) => {
  
  return (
    <div className={cn("group fixed min-w-[340px] max-w-sm  md:min-w-sm md:max-w-md w-auto border-[1.5px] h-auto flex flex-row justify-center items-center text-white p-4 rounded-3xl backdrop-blur-3xl hover:cursor-pointer",
      notificationVariants({type,animation,position}),
      className
      )}>
      <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
          <div className="header-section w-full h-auto flex flex-row justify-start items-center gap-3">
              {/* Icon-section */}
              <div className="w-auto h-auto flex">
                {type=="info" && <Info className="w-7 h-7 stroke-[1.5px] text-blue-500"/>}
                {type=="success" && <CircleCheck className="w-7 h-7 stroke-[1.5px] text-green-500"/>}
                {type=="warning" && <TriangleAlert className="w-7 h-7 stroke-[1.5px] text-yellow-500"/>}
                {type=="error" && <CircleAlert className="w-7 h-7 stroke-[1.5px] text-red-500"/>}
              </div>
              {/* Title Setion */}
              <p className={cn("text-lg line-clamp-1",
                type=="info" && "text-blue-500",
                type=="success" && "text-green-500",
                type=="warning" && "text-yellow-500",
                type=="error" && "text-red-500")}>
                {data?.title}
              </p>
          </div>
      </div>
      <button title="close" onClick={close} type="button" className="absolute -top-[6px] -right-[6px] w-auto h-auto hover:cursor-pointer">
        <CircleX className={cn(
            "w-6 h-6 stroke-[1.25px] invisible transition-all duration-300 ease-in-out",
            type=="info" && "text-blue-500 fill-blue-200",
            type=="success" && "text-green-500 fill-green-200",
            type=="warning" && "text-yellow-500 fill-yellow-200",
            type=="error" && "text-red-500 fill-red-200",
            isTop && "visible lg:invisible lg:group-hover:visible"
        )}/>
      </button>
    </div>
  );
};
