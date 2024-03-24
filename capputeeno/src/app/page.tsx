"use client"

import { Main } from "@/components/Main.styled";
import { FilterBar } from "@/components/FilterBar";
import { Products } from "@/components/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pagination } from "@/components/Pagination";

export default function Home() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Main>
        <FilterBar />
        <Pagination>
          <Products />
        </Pagination>
      </Main>
    </QueryClientProvider>
  );
}
