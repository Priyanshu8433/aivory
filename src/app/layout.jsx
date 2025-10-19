import { ThemeProvider } from "@/components/providers/theme-provider";
import ToolContextProvider from "@/components/providers/ToolContextProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import { Toaster } from "@/components/shadcn/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "Aivory",
  description: "Your AI Companion",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: shadcn }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased relative`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToolContextProvider>
              <div>{children}</div>
            </ToolContextProvider>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
