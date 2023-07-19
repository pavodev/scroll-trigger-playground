// This is a styling only, client component
"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="z-10 min-h-screen w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
      {children}
    </div>
  );
};

export default Container;
