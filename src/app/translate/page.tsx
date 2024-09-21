'use client';

import DotBackgroundContainer from '@/components/ui/DotBackgroundContainer';
import React, { useState } from 'react';
import useTranslate from '../hooks/useTranslate';
import SpeechRecognitionButton from '@/components/speech-recognition/SpeechRecognition';
import TextToAudio from '@/components/text-to-audio/TextToAudio';
import TextUpload from '@/components/text-upload/TextUpload';
import TextArea from '@/components/ui/TextArea';
import Combobox from '@/components/ui/Combobox';
import { languages } from '@/lib/constants';
import CopyToClipboard from '@/components/copy-to-clipboard/CopyToClipboard';
import GithubButton from '@/components/github-button/GithubButton';

export default function Translate() {
  const [inputText, setInputText] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const { translatedText } = useTranslate({
    text: inputText,
    language: selectedLanguage,
  });

  return (
    <DotBackgroundContainer>
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className="grid w-full h-full p-5 sm:p-16 grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 place-items-center">
          <div className="row-span-1 w-full h-full flex justify-center items-center">
            <div className="flex flex-col w-full justify-center items-center">
              <TextArea
                id="input-box"
                value={inputText}
                rows={8}
                contentEditable={true}
                placeholder="Enter your text here..."
                onChange={(e) => setInputText(e.target.value)}
              />
              <div className="flex w-full p-1 my-2 space-x-2 justify-start">
                <SpeechRecognitionButton setInputText={setInputText} />
                <TextToAudio text={inputText} />
                <TextUpload setUploadedText={setInputText} />
              </div>
            </div>
          </div>
          <div className="row-span-1 w-full h-full flex justify-center items-center">
            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col w-full justify-center items-center">
                <TextArea
                  id="input-box"
                  value={translatedText}
                  rows={8}
                  onChange={() => {}}
                  contentEditable={false}
                />
                <div className="flex w-full p-1 my-2 justify-between">
                  <Combobox
                    options={languages}
                    inputValue={selectedLanguage}
                    setInputValue={setSelectedLanguage}
                    placeholder="Select a Language"
                  />
                  <CopyToClipboard text={translatedText} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-2 justify-center">
          <GithubButton />
        </div>
      </div>
    </DotBackgroundContainer>
  );
}
