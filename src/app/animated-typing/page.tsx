'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TypingText: React.FC = () => {
  const texts = ["Simpler","","Easier","","Efficient","", "Stress-Free","", "Profitable"];
  const forwardSpeed = 200; // Speed for moving forward (displaying characters)
  const backwardSpeed = 50; // Speed for moving backward (erasing characters)
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string>('');
  const [showCursor, setShowCursor] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayText((prevText) => {
        if (reverse) {
          // If in reverse mode, remove the last character
          if (prevText.length > 0) {
            return prevText.slice(0, -1);
          } else {
            // When all characters are removed, switch back to forward mode
            setReverse(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCharIndex(0);
            return '';
          }
        } else {
          const currentText = texts[textIndex];

          if (charIndex < currentText.length) {
            return prevText + currentText[charIndex];
          } else {
            // When the entire word is displayed, switch to reverse mode
            setReverse(true);
            return prevText;
          }
        }
      });

      if (!reverse) {
        // Increment the character index in forward mode
        setCharIndex(charIndex + 1);
      }

      // Toggle the cursor state to make it appear and disappear.
      setShowCursor((prevShowCursor) => !prevShowCursor);

      // Check if all texts have been displayed
      if (textIndex === texts.length - 1 && reverse && charIndex === 0) {
        // Restart the animation from the beginning
        setTextIndex(0);
        setCharIndex(0);
        setReverse(false);
        setDisplayText('');
      }
    }, reverse ? backwardSpeed : forwardSpeed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayText, forwardSpeed, backwardSpeed, textIndex, texts, showCursor, charIndex, reverse]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <Image src="/flag.jpg" alt="My Image" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white z-10">
        <p className="text-4xl font-Gilroy-Semi-Bold">Kitaab</p>
        <p className="text-6xl font-Gilroy-Bold">
          Accounting made {displayText}
          <span className={`text-6xl font-bold ${showCursor ? 'visible-cursor' : 'hidden-cursor'}`}>|</span>
        </p>
        <div className="animate-typing">
        </div>
       
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-50"></div>
    </div>
  );
};

export default TypingText;
