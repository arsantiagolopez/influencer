import React, { FC, ReactNode } from "react";
import { Navigation } from "../Navigation";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-primary w-full">
      <Navigation />

      <div className="w-full flex flex-col min-h-[calc(100vh-3.5em)] overflow-scroll px-4 md:px-[20vw]">
        {children}
      </div>
    </div>
  );
};

export { Layout };
