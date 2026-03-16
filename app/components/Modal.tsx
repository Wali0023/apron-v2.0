"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white">
        <button
          onClick={() => router.back()}
          className="absolute right-4 top-4 font-bold"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
