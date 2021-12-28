import React, {useState, useEffect} from 'react'

const ProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      let progressBarHandler = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;
  
        setScroll(scroll);
      };
  
      window.addEventListener("scroll", progressBarHandler);
  
      return () => window.removeEventListener("scroll", progressBarHandler);
    });
    return (
        <div className="progressBarContainer max-w-[415px] bg-red-900 z-[100] absolute bottom-[-4px]">
        <div
          className="progressBar"
          style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        />
      </div>
    )
}

export default ProgressBar
