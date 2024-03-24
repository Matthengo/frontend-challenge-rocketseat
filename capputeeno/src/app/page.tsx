"use client"

import { FilterBar } from "@/components/FilterBar";
import { Products } from "@/components/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pagination } from "@/components/Pagination";
import { HomeMain } from "@/components/Pages/HomeMain.styled";

export default function Home() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <HomeMain>
        <FilterBar />
        <Pagination>
          <Products />
        </Pagination>
      </HomeMain>
    </QueryClientProvider>
  );
}
