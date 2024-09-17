'use client';

import React, { useState } from 'react';
import TextArea from '../ui/TextArea';

export default function InputBox() {
  const [text, setText] = useState<string>('');

  return (
    <div className="flex w-full justify-center items-center">
      <TextArea
        id="input-box"
        value={text}
        rows={8}
        placeholder="Enter your text here..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
