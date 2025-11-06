import type { FC, ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
}

export const Frame: FC<FrameProps> = ({ children }) => (
  <div className="w-[600px] m-auto p-5 border rounded-md border-frame-border bg-frame-background">
    {children}
  </div>
);
