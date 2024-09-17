'use client';

import 'regenerator-runtime/runtime';
import React, { useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Icons } from '@/lib/icons';

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
    <div className="hover:text-primary cursor-pointer">
      {listening ? (
        <Icons.stop onClick={() => handleRecordVoice()} size={24} />
      ) : (
        <Icons.microphoneOn onClick={() => handleRecordVoice()} size={24} />
      )}
    </div>
  );
}
