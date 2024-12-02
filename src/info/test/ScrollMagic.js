import React, { useEffect, useState } from 'react';
import ScrollMagic from 'scrollmagic';
import '../../assets/css/Info.css'

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isAnimating) {
        const position = window.scrollY;
        setScrollPosition(position);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimating]);

  useEffect(() => {
    const text = '出る杭は\n　打たれる\n　出過ぎた杭は\n　　抜かれる\n';
    let currentIndex = Math.floor(scrollPosition / 50);

    if (currentIndex > text.length - 1) {
      currentIndex = text.length - 1;
      setIsAnimating(true); // アニメーション中はスクロールを固定する
      setTimeout(() => setIsAnimating(false), 1000); // 1秒後にアニメーション終了
    }

    setDisplayText(text.slice(0, currentIndex));
  }, [scrollPosition]);


  return (
    <div>
      <div style={{ height: '2150px' }}>
        <div class="motto-text vertical-text" style={{ whiteSpace: 'pre-line', webkitTransform: 'translateY' }}>
          {displayText}
        </div>
      </div>
      <div>
        <div>
          中途半端な人間は、矯正される<br />
          突出した人間は、引き抜かれる<br />
          引き抜かれる、人間を目指そう<br />
        </div>
      </div>
    </div>
  );
}