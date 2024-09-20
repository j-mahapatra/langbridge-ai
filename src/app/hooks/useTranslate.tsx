import { useEffect, useState } from 'react';

interface UseTranslateProps {
  text: string;
  language: string;
}

export default function useTranslate({ text, language }: UseTranslateProps) {
  const [outputText, setOutputText] = useState<string>('');

  useEffect(() => {
    const handleTranslate = async () => {
      try {
        const response = await fetch('/api/ask-ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text, language }),
        });
        const res = await response.json();
        const translatedText =
          res?.data?.translatedText ?? 'Translation failed!';
        setOutputText(translatedText);
      } catch (error) {
        console.log(error);
      }
    };

    if (text) {
      const timeout = setTimeout(() => {
        handleTranslate();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [text, language]);

  return { translatedText: outputText };
}
