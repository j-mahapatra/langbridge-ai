import { Icons } from '@/lib/icons';
import React from 'react';

interface TextToAudioProps {
  text: string;
}

export default function TextToAudio({ text }: TextToAudioProps) {
  const handleAudioButtonClick = (text: string) => {
    const audio = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(audio);
  };
  return (
    <div className="hover:text-primary cursor-pointer">
      <Icons.volume
        size={36}
        onClick={() => handleAudioButtonClick(text)}
        className="cursor-pointer hover:text-primary"
      />
    </div>
  );
}
