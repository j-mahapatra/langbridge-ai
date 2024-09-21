import { Icons } from '@/lib/icons';
import Link from 'next/link';
import React from 'react';

export default function GithubButton() {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_GITHUB_LINK!}
      target="_blank"
      className="flex space-x-3 items-center shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-2 text-sm rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
    >
      <Icons.github size={32} />
      <span>Contribute</span>
    </Link>
  );
}
