'use client';

import 'regenerator-runtime/runtime';
import React, { useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Icons } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface SpeechRecognitionProps {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SpeechRecognitionButton({
  setInputText,
}: SpeechRecognitionProps) {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript, setInputText]);

  const handleRecordVoice = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return (
    <div
      className={cn(
        'cursor-pointer',
        listening ? 'hover:text-red-900' : 'hover:text-primary',
      )}
    >
      {listening ? (
        <Icons.stop onClick={() => handleRecordVoice()} size={36} />
      ) : (
        <Icons.microphoneOn onClick={() => handleRecordVoice()} size={36} />
      )}
    </div>
  );
}
