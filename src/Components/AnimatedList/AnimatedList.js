import React, { useState, useEffect } from 'react';

const AnimatedList = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const words = ["Future", "Vision", "Excellence", "Innovation"];

  useEffect(() => {
    let typingTimer;
    let wordChangeTimer;

    const typeCharacter = () => {
      setDisplayedText(words[currentWordIndex].slice(0, currentCharIndex + 1));
      if (currentCharIndex < words[currentWordIndex].length - 1) {
        typingTimer = setTimeout(() => {
          setCurrentCharIndex(prevIndex => prevIndex + 1);
        }, 100); // Adjust the speed of typing here
      } else {
        wordChangeTimer = setTimeout(() => {
          setCurrentCharIndex(0);
          setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 2000); // Adjust the delay between words here
      }
    };

    typingTimer = setTimeout(typeCharacter, 100);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(wordChangeTimer);
    };
  }, [currentCharIndex, currentWordIndex]);

  return (
    <div className=''>
      <div className='we-left  mx-6 text-lg font-semibold'>
        crafting the <span className='text-[#c367ca] rounded-lg border-[#c367ca] border-2 p-2'>{displayedText}</span> one pixel at a time
        </div>
      <div className='right mx-6 '>
        <div className="typewriter text-5xl font-extrabold ">
          
        </div>
      </div>
    </div>
  );
};

export default AnimatedList;
