import React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between border border-gray-200 hover:border-[#FCBF49] rounded-2xl p-6 bg-white transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("space-y-4", className)} {...props} />;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  icon?: React.ReactNode;
  imageSrc?: string;
  imageFullWidth?: boolean;
}

export function CardTitle({ className, icon, imageSrc, imageFullWidth = false, children, ...props }: CardTitleProps) {
  return (
    <div className="space-y-4">
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className={cn(
            "w-full h-40 object-cover",
            imageFullWidth
              ? "-mx-6 -mt-6 w-[calc(100%+3rem)] max-w-none rounded-t-2xl rounded-b-none border-b border-gray-200"
              : "rounded-xl border border-gray-100"
          )}
        />
      )}
      <div className="flex items-center gap-3">
        {icon && (
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FCBF49]/15 text-[#F77F00] group-hover:bg-[#F77F00] group-hover:text-white transition-colors duration-300 shrink-0">
            {icon}
          </div>
        )}
        <h3
          className={cn(
            "text-lg font-bold text-[#003049] group-hover:text-[#D62828] transition-colors duration-300",
            className
          )}
          {...props}
        >
          {children}
        </h3>
      </div>
    </div>
  );
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-gray-600 mt-2 leading-relaxed", className)}
      {...props}
    />
  );
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("py-2", className)} {...props} />;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={cn("pt-6 mt-auto", className)} {...props} />;
}