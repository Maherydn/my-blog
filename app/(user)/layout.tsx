'use client'

import { Header } from "./_component/header/Header";
import { Footer } from "./_component/footer/Footer";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Footer />
      </QueryClientProvider>
    </>
  );
}
