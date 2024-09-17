'use client';

import React, { useState } from 'react';
import TextArea from '../ui/TextArea';
import SpeechRecognitionButton from '@/components/speech-recognition/SpeechRecognition';

export default function InputBox() {
  const [text, setText] = useState<string>('');

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <TextArea
        id="input-box"
        value={text}
        rows={8}
        placeholder="Enter your text here..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex w-full p-1 space-x-2 justify-start">
        <SpeechRecognitionButton setInputText={setText} />
      </div>
    </div>
  );
}
