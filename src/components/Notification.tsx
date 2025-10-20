import React from "react";
import type { NotificationData, NotificationType } from "../types";
import { cn } from "../lib/utils";
import { Info, CircleCheck, TriangleAlert, CircleAlert, CircleX } from "lucide-react";
import { notificationVariants } from "../lib/variants";

interface NotificationProps {
  className?: string;
  type: NotificationType;
  data?: NotificationData;
  isTop: boolean;
  onClose?: () => void;
}

const iconMap: Record<NotificationType, React.ElementType> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
};

export const Notification: React.FC<NotificationProps> = ({
  className,
  type,
  data,
  isTop,
  onClose,
}) => {
  const Icon = iconMap[type];

  return (
    <div
      className={cn(
        "group relative flex min-w-[340px] max-w-sm flex-row items-center justify-center rounded-3xl border-[1.5px] p-4 text-white backdrop-blur-3xl pointer-events-auto hover:cursor-pointer md:min-w-sm md:max-w-md",
        notificationVariants({ type }),
        className
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-2">
        {/* Header Section */}
        <div className="flex w-full flex-row items-center gap-2">
          {/* Icon */}
          <Icon
            className={cn(
              "h-6 w-6 stroke-[1.5px]",
              {
                info: "text-blue-500",
                success: "text-green-500",
                warning: "text-yellow-500",
                error: "text-red-500",
              }[type]
            )}
          />
          {/* Title */}
          {typeof data?.title === "string" ? (
            <p
              className={cn(
                "text-base line-clamp-1 font-medium",
                {
                  info: "text-blue-500",
                  success: "text-green-500",
                  warning: "text-yellow-500",
                  error: "text-red-500",
                }[type]
              )}
            >
              {data.title}
            </p>
          ) : (
            data?.title
          )}
        </div>

        {/* Content Section */}
        {(data?.message || data?.action) && (
          <div className="flex w-full flex-row items-end justify-start gap-3">
            {typeof data?.message === "string" ? (
              <p className="text-sm text-[#546E7A]">{data.message}</p>
            ) : (
              data.message
            )}
            {data.action}
          </div>
        )}
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          type="button"
          title="Close"
          onClick={onClose}
          className="absolute -top-[6px] -right-[6px] transition-all duration-300 ease-in-out"
        >
          <CircleX
            className={cn(
              "h-6 w-6 stroke-[1.25px] invisible",
              {
                info: "text-blue-500 fill-blue-200",
                success: "text-green-500 fill-green-200",
                warning: "text-yellow-500 fill-yellow-200",
                error: "text-red-500 fill-red-200",
              }[type],
              isTop && "visible lg:invisible lg:group-hover:visible"
            )}
          />
        </button>
      )}
    </div>
  );
};
