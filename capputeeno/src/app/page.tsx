"use client"

import { FilterBar } from "@/components/FilterBar";
import { Products } from "@/components/Products";
import { Pagination } from "@/components/Pagination";
import { HomeMain } from "@/components/Pages/HomeMain.styled";

export default function Home() {
  return (
    <HomeMain>
      <FilterBar />
      <Pagination>
        <Products />
      </Pagination>
    </HomeMain>
  );
}
