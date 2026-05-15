'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PersonalPhoto() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-14 h-14 shrink-0 border border-line rounded-md overflow-hidden relative"
        aria-label="View photo of Muhammad Zeshan"
      >
        <Image
          src="/assets/personal.jpg"
          alt="Muhammad Zeshan"
          fill
          className="object-cover mt-2 scale-[2.2] origin-[center_15%]"
          sizes="56px"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/assets/personal.jpg"
              alt="Muhammad Zeshan"
              width={480}
              height={640}
              className="w-full h-auto border border-line rounded-md"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded"
            >
              [×]
            </button>
          </div>
        </div>
      )}
    </>
  );
}
