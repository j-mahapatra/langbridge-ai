'use client';

import React, { useState } from 'react';
import TextArea from '../ui/TextArea';

export default function OutputBox() {
  const [text, setText] = useState<string>('');

  return (
    <div className="flex w-full justify-center items-center">
      <TextArea
        id="input-box"
        value={text}
        rows={8}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
