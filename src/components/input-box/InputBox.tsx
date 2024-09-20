'use client';

import React, { useState } from 'react';
import TextArea from '../ui/TextArea';
import SpeechRecognitionButton from '@/components/speech-recognition/SpeechRecognition';
import TextToAudio from '../text-to-audio/TextToAudio';
import FileUpload from '../text-upload/TextUpload';

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
        <TextToAudio text={text} />
        <FileUpload setUploadedText={setText} />
      </div>
    </div>
  );
}
