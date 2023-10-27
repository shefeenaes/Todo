'use client'
import { useState, useEffect } from 'react';

const TypingText: React.FC = () => {
 const defaultText = "Hello, World!"; // Default text to be animated
 const speed = 100; // Typing speed in milliseconds
 const [displayText, setDisplayText] = useState<string>('');

 useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayText((prevText) => {
        if (prevText.length === defaultText.length) {
          return '';
        } else {
          return prevText + defaultText[prevText.length];
        }
      });
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
 }, [displayText, speed]);

 return <span className="text-2xl font-semibold">{displayText}</span>;
};

export default TypingText;