import { Icons } from '@/lib/icons';
import React, { useState } from 'react';

interface CopyToClipboardProps {
  text: string;
}

export default function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <button
      className={`hover:text-primary cursor-pointer`}
      onClick={handleCopy}
    >
      {copied ? (
        <Icons.squareRoundedCheck size={36} />
      ) : (
        <Icons.copy size={36} />
      )}
    </button>
  );
}
