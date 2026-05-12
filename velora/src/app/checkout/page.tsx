import { Suspense } from "react";
import CheckoutContent from "./CheckoutContent";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-100 flex items-center justify-center">
      <div className="text-zinc-400 font-medium">Loading checkout...</div>
    </div>}>
      <CheckoutContent />
    </Suspense>
  );
}