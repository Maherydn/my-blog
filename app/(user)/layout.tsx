"use client";

import { Header } from "./_component/header/Header";
import { Footer } from "./_component/footer/Footer";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WriteButton } from "./_component/header/WriteButton";

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
        <main className="w-full  mt-20">{children}</main>
        <WriteButton/>
        <Footer />
      </QueryClientProvider>
    </>
  );
}
