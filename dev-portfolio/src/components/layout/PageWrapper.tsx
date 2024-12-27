import React, { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {children}
    </main>
  );
}