"use client";

import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-zinc-300 border-t-zinc-700 animate-spin" />
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}