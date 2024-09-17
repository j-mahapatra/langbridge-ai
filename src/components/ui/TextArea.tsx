import { cn } from '@/lib/utils';
import React from 'react';

interface TextAreaProps {
  id: string;
  value: string;
  rows?: number;
  placeholder?: string;
  cssClasses?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  id,
  value,
  rows = 5,
  placeholder,
  cssClasses,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
      className={cn(
        'block py-3 px-4 border-none border-transparent w-full rounded-lg dark:bg-neutral-900 text-foreground dark:text-white',
        cssClasses,
      )}
    />
  );
}
