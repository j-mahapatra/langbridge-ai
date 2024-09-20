import { Icons } from '@/lib/icons';
import React from 'react';

interface TextUploadProps {
  setUploadedText: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextUpload({ setUploadedText }: TextUploadProps) {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result as string;
        setUploadedText(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <label htmlFor="file-upload" className="cursor-pointer hover:text-primary">
      <Icons.upload size={36} />
      <input
        type="file"
        id="file-upload"
        onChange={onFileChange}
        className="hidden"
        accept=".txt"
      />
    </label>
  );
}
