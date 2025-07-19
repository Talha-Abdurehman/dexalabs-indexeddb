"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/app/components/theme-provider";

export function RootClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  if (isRoot) {
    // No theme classes at all - just return children as-is
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
