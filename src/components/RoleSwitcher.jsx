

// src/components/RoleSwitcher.js
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const words = ['a web developer.', 'an app developer.', 'a student.' , 'an aspiring individual.'];

const RoleSwitcher = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    const animateLetter = (letter) => {
      anime({
        targets: letter,
        opacity: [0, 1],
        translateY: ['1em', 0],
        duration: 2000,
        easing: 'easeOutExpo',
      });
    };

    const animateWord = (word) => {
      if (wordRef.current) {
        const letters = word.split('').map((letter, index) => (
          <span key={index} className="inline-block opacity-0">{letter}</span>
        ));

        // Ensure wordRef.current is cleared before appending new elements
        wordRef.current.innerHTML = '';
        
        // Using React's method to update the DOM
        wordRef.current.innerHTML = letters.map(letter => letter.props.children).join('');
        
        anime({
          targets: wordRef.current.querySelectorAll('span'),
          opacity: [1, 0],
          translateY: [0, '-1em'],
          delay: 3000,
          duration: 2000,
          easing: 'easeOutExpo',
          complete: () => {
            setWordIndex(prevIndex => (prevIndex + 1) % words.length);
          },
        });

        // Animate each letter
        wordRef.current.querySelectorAll('span').forEach(letter => animateLetter(letter));
      }
    };

    animateWord(words[wordIndex]);
  }, [wordIndex]);

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className=" text-xl sm:text-5xl font-bold uppercase">
        <span className="text-red-500">I am </span>
        <span className='text-white' ref={wordRef}></span>
      </h1>
    </div>
  );
};

export default RoleSwitcher;
